import { getContributionCalendar } from "@/lib/contributions";
import ContributionGraph from "./ContributionGraph";
import GraphTooltip from "./GraphTooltip";

export default async function Contributions() {
  const { days, total } = await getContributionCalendar();

  // The graph is rendered here, on the server, and handed to the client wrapper
  // as children, so none of its 367 cells take part in hydration.
  return (
    <GraphTooltip>
      <ContributionGraph days={days} total={total} />
    </GraphTooltip>
  );
}
