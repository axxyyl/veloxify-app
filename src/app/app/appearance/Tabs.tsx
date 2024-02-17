"use server";
import Tab, { ITab } from "@/models/tabModel";
import { ITabDocument } from "@/models/tabModel";
import { Session } from "next-auth";
import AddTab from "./AddTab";
import CloseIcon from "@/components/icons/CloseIcon";
import DragIcon from "@/components/icons/DragIcon";
const Tabs = async ({ session }: { session: Session | null }) => {
  const tabs = await Tab.find({
    email: session?.user?.email,
  });
  return (
    <>
      <div className="relative mb-10">
        <h1 className="text-xl font-bold mt-10 mb-5">Tabs</h1>
        <div className="flex flex-col gap-4">
          {tabs?.map((tab: ITabDocument) => (
            <div
              key={tab.name}
              className="cursor-pointer border border-gray-200 rounded-md flex justify-between items-center p-3"
            >
              <div className="flex flex-row items-center gap-5">
                <DragIcon />
                <div className="flex flex-col">
                  <h1 className="text-sm font-semibold">{tab.name}</h1>
                  <p className="text-sm text-slate-600">{tab.description}</p>
                  <span className="text-sm text-slate-500">
                    {" "}
                    {tab.items?.length} Items
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col text-sm">
                  <span className="text-xs text-blue-500">View Tab</span>
                </div>
                <CloseIcon />
              </div>
            </div>
          ))}
          <AddTab />
        </div>
      </div>
    </>
  );
};

export default Tabs;
