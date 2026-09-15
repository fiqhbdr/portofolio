import {
  SNAPSHOT_COUNTS,
  SNAPSHOT_LEVELS,
  SNAPSHOT_START,
} from "@/data/contributions";

export type ContributionDay = {
  date: string;
  level: number;
  count: number;
  /** Column in the graph, 0-based. 53 columns of 7 days, oldest first. */
  week: number;
  /** Row in the graph, 0-based, where 0 is Sunday. */
  weekday: number;
};

export type ContributionCalendar = {
  days: ContributionDay[];
  total: number;
};

const CALENDAR_URL = "https://github.com/users/fiqihbadrian/contributions";

// GitHub's calendar covers 365 days plus the partial weeks on both ends, anchored
// to UTC. The window ends today and starts on the Sunday on or before
// today - 365, which is what makes it 367 cells on a Tuesday.
const WINDOW_DAYS = 365;

function utcToday(): Date {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
}

function isoDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// GitHub renders the calendar as a grid of cells, each followed by a tooltip that
// carries the real contribution count. Cells are read in column order because the
// graph is laid out as 53 weeks of 7 days, not as a single row.
function liveCalendar(html: string): ContributionCalendar | null {
  const counts = new Map<string, number>();
  for (const match of html.matchAll(
    /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g,
  )) {
    const text = match[2].trim();
    const count = text.startsWith("No contributions")
      ? 0
      : Number.parseInt(text, 10);
    if (Number.isFinite(count)) counts.set(match[1], count);
  }

  const cells: (ContributionDay & { week: number; weekday: number })[] = [];
  for (const match of html.matchAll(
    /data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*data-level="(\d)"/g,
  )) {
    const [, date, id, level] = match;
    const position = id.match(/component-(\d+)-(\d+)$/);
    if (!position) continue;
    cells.push({
      date,
      level: Number(level),
      count: counts.get(id) ?? 0,
      weekday: Number(position[1]),
      week: Number(position[2]),
    });
  }

  if (cells.length === 0) return null;

  cells.sort((a, b) => a.week - b.week || a.weekday - b.weekday);

  const days = cells.map(({ date, level, count, week, weekday }) => ({
    date,
    level,
    count,
    week,
    weekday,
  }));

  // The label describes the grid, so the total is the sum of the grid rather
  // than a separate number scraped off the page. They agree on the live page,
  // and deriving it means they cannot drift apart later.
  const total = days.reduce((sum, day) => sum + day.count, 0);

  return { days, total };
}

/**
 * The snapshot is mapped onto the same rolling window as the live calendar, but
 * every day keeps the date it was captured under. Days the snapshot never
 * covered stay empty instead of borrowing a count from a neighbouring day, so
 * the graph fades out at the edges rather than quietly rewriting history.
 */
function snapshotCalendar(): ContributionCalendar {
  const captured = new Map<string, { level: number; count: number }>();
  const capturedStart = new Date(`${SNAPSHOT_START}T00:00:00Z`);
  SNAPSHOT_COUNTS.forEach((count, index) => {
    const date = new Date(capturedStart);
    date.setUTCDate(date.getUTCDate() + index);
    captured.set(isoDay(date), {
      level: Number(SNAPSHOT_LEVELS[index] ?? 0),
      count,
    });
  });

  const today = utcToday();
  const first = new Date(today);
  first.setUTCDate(first.getUTCDate() - WINDOW_DAYS);
  first.setUTCDate(first.getUTCDate() - first.getUTCDay());

  const days: ContributionDay[] = [];
  for (const cursor = new Date(first); cursor <= today; ) {
    const date = isoDay(cursor);
    const hit = captured.get(date);
    days.push({
      date,
      level: hit?.level ?? 0,
      count: hit?.count ?? 0,
      week: Math.floor(days.length / 7),
      weekday: cursor.getUTCDay(),
    });
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  const total = days.reduce((sum, day) => sum + day.count, 0);

  return { days, total };
}

export async function getContributionCalendar(): Promise<ContributionCalendar> {
  try {
    const response = await fetch(CALENDAR_URL, {
      headers: { "User-Agent": "fiqihbadrian.my.id" },
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error(`GitHub responded with ${response.status}`);
    }

    const parsed = liveCalendar(await response.text());
    if (!parsed) throw new Error("The calendar markup could not be read");

    return parsed;
  } catch (error) {
    console.warn(
      "[contributions] using the bundled snapshot instead:",
      error instanceof Error ? error.message : error,
    );
    return snapshotCalendar();
  }
}
