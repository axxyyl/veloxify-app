"use client";
import { ITab } from "@/models/tabModel";
const AddTab = ({ tabs }: { tabs: any }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mt-10 mb-5">Tabs</h1>
      <div className="flex flex-col gap-4">
        <div className="border border-gray-200 rounded-md flex justify-between items-center p-3">
          <h1>My Recommendations</h1>
          <span>x</span>
        </div>
        <div className="border border-gray-200 rounded-md flex justify-between items-center p-3">
          <h1>My Recommendations</h1>
          <span>x</span>
        </div>
      </div>
    </div>
  );
};

export default AddTab;
