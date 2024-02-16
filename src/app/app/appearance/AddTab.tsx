"use client";
import CloseIcon from "@/components/icons/CloseIcon";
import DragIcon from "@/components/icons/DragIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import { ITab } from "@/models/tabModel";
import { useState } from "react";
import { useFormState } from "react-dom";
const AddTab = ({ tabs }: { tabs: any }) => {
  const [active, setActive] = useState(false);

  // const [state, formAction] = useFormState()
  return (
    <>
      <div className="relative mb-10">
        <h1 className="text-xl font-bold mt-10 mb-5">Tabs</h1>
        <div className="flex flex-col gap-4">
          <div className="cursor-pointer border border-gray-200 rounded-md flex justify-between items-center p-3">
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
          <div
            className={`h-0 overflow-hidden ${
              active ? "h-[300px]" : "h-0"
            } duration-200 transition-all`}
          >
            <form className="border border-gray-200 p-5 flex flex-col gap-4 rounded-md">
              <h1 className="font-bold">Add a Tab</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col text-sm col-span-6">
                  <label>Name</label>
                  <div className="border border-gray-200 p-2 rounded-lg">
                    <input name="name" type="text" className="outline-none" />
                  </div>
                </div>
                <div className="flex flex-col text-sm col-span-6">
                  <label>Description</label>
                  <div className="border border-gray-200 p-2 rounded-lg">
                    <textarea
                      name="description"
                      className="outline-none w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="p-2 px-3 rounded-md hover:bg-blue-400 duration-200 transition-colors bg-blue-500 text-white w-full">
                  Save
                </button>
              </div>
            </form>
          </div>
          <div
            onClick={() => {
              setActive((prev) => !prev);
            }}
            className="flex hover:bg-gray-200 hover:text-gray-900 duration-200 transition-colors flex-row items-center p-3 text-red-400 cursor-pointer border border-gray-200 rounded-md justify-center gap-4"
          >
            <PlusIcon />
            <h1>Add a tab</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTab;
