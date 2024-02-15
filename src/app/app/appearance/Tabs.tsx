import Tab from "@/models/tabModel";
import { Session } from "next-auth";
import AddTab from "./AddTab";

const Tabs = async ({ session }: { session: Session | null }) => {
  const tabs = await Tab.find({
    email: session?.user?.email,
  });
  console.log(tabs);
  return (
    <>
      <AddTab tabs={tabs} />
    </>
  );
};

export default Tabs;
