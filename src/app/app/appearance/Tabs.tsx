"use server";
import Tab, { ITab } from "@/models/tabModel";
import { ITabDocument } from "@/models/tabModel";
import { Session } from "next-auth";
import AddTab from "./AddTab";
import CloseIcon from "@/components/icons/CloseIcon";
import DragIcon from "@/components/icons/DragIcon";
import Link from "next/link";
import TabIcon from "@/components/icons/TabIcon";
import ItemIcon from "@/components/icons/ItemIcon";
const Tabs = async ({ session }: { session: Session | null }) => {
  const tabs = await Tab.find({
    email: session?.user?.email,
  });
  return (
    <>
      <div className="relative mb-10">
        <h1 className="text-xl font-bold mt-10 mb-5">Tabs</h1>
        <div className="flex flex-col gap-4 ">
          {tabs?.map((tab: ITabDocument) => (
            <div
              key={tab.name}
              className=" border border-gray-200 rounded-md flex justify-between items-center p-3"
            >
              <div className="flex flex-row items-center gap-5">
                <DragIcon />
                <div className="flex flex-col">
                  <div className="flex gap-1 items-center">
                    <span className="text-slate-600">
                      <TabIcon />
                    </span>
                    <Link
                      href={"/"}
                      className="text-blue-500 text-sm font-semibold hover:underline"
                    >
                      {tab.name}
                    </Link>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 mb-1 italic line-clamp-1">
                    {tab.description}
                  </p>
                  <span className="text-sm text-slate-500 flex gap-1 items-center">
                    <span>
                      <ItemIcon />
                    </span>
                    {tab.items?.length}{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex flex-col text-sm">
                  <span className="text-xs text-blue-500 cursor-pointer hover:text-blue-300">
                    Add an item
                  </span>
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
