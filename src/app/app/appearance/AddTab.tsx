"use client";
import CloseIcon from "@/components/icons/CloseIcon";
import DragIcon from "@/components/icons/DragIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import { ITab } from "@/models/tabModel";
import { useState } from "react";
const AddTab = ({ tabs }: { tabs: any }) => {
  const [active, setActive] = useState(-1);
  return (
    <div>
      <h1 className="text-xl font-bold mt-10 mb-5">Tabs</h1>
      <div className="flex flex-col gap-4">
        <div
          onClick={() => {
            if (active === 1) return setActive(-1);
            setActive(1);
          }}
          className="cursor-pointer border border-gray-200 rounded-md flex justify-between items-center p-3"
        >
          <div className="flex flex-row items-center gap-5">
            <DragIcon />
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Choices</h1>
              <span className="text-sm text-slate-500"> 45 Items</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col text-sm">
              <span className="text-xs text-blue-500">View Tab</span>
            </div>
            <CloseIcon />
          </div>
        </div>
        <div className="flex hover:bg-gray-200 hover:text-gray-900 duration-200 transition-colors flex-row items-center p-3 text-red-400 cursor-pointer border border-gray-200 rounded-md justify-center gap-4">
          <PlusIcon />
          <h1>Add a tab</h1>
        </div>
      </div>
    </div>
  );
};

export default AddTab;
