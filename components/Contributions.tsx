import { getContributionCalendar } from "@/lib/contributions";
import ContributionGraph from "./ContributionGraph";

export default async function Contributions() {
  const { days, total } = await getContributionCalendar();
  return <ContributionGraph days={days} total={total} />;
}
