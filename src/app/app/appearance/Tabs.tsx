import Tab from "@/models/tabModel";
import { Session } from "next-auth";

const Tabs = async ({ session }: { session: Session | null }) => {
  const tabs = Tab.find({
    email: session?.user?.email,
  });
  return <div>Group</div>;
};

export default Tabs;
