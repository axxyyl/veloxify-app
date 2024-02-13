"use client";

import { useState } from "react";

function AddCategory() {
  const [active, setActive] = useState(false);
  return (
    <div className="">
      <button className="bg-black p-2 px-3 text-white rounded-md mb-10">
        Add a Category
      </button>
      <form className="border borday-gray-200 p-10 flex flex-col  items-end gap-4  md:flex-row">
        <div className="flex flex-col">
          <label htmlFor="">Title</label>
          <div className="border border-gray-200 rounded-md p-2">
            <input
              type="text"
              placeholder="Enter category title"
              className="w-full border-none outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <button className="bg-black text-white px-3 p-2 rounded-md">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCategory;
