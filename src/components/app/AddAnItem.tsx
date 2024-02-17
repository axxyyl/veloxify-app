"use client";

import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import useAddItemStore from "@/lib/store";

const AddAnItem = ({ tab_id }: { tab_id: string }) => {
  const { setAddItem, active, id } = useAddItemStore();
  return (
    <>
      <span
        onClick={() =>
          setAddItem({
            active: tab_id === id ? !active : true,
            id: tab_id,
          })
        }
        className="text-xs text-blue-500 cursor-pointer hover:text-blue-300 select-none"
      >
        Add an item
      </span>
    </>
  );
};

export default AddAnItem;
