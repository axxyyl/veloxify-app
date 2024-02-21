"use client";
import Button from "@/components/forms/Button";

import PlusIcon from "@/components/icons/PlusIcon";
import { addTab } from "@/lib/actions";

import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

const AddTab = () => {
  const [active, setActive] = useState(false);
  const [state, formAction] = useFormState(addTab, {
    message: "",
    errors: {
      name: [],
    },
  });
  const router = useRouter();
  const form = useRef(null);

  useEffect(() => {
    if (form.current) {
      if (state?.message == "Success") {
        const ok = form?.current as any;
        ok.reset();
        setActive(false);
        router.refresh();
      }
    }
  }, [state, router]);
  return (
    <>
      <div
        className={`h-0 overflow-hidden ${
          active ? "h-[350px]" : "h-0"
        } duration-200 transition-all`}
      >
        <form
          ref={form}
          action={formAction}
          className="border border-gray-200 p-5 flex flex-col gap-4 rounded-md"
        >
          {state?.errors?.name.map((e: string) => (
            <span className="text-red-600 text-sm" key={e}>
              {e}
            </span>
          )) ?? null}
          <h1 className="font-bold">Add a Tab</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col text-sm col-span-6">
              <label>Name</label>
              <div className="border border-gray-200 p-2 rounded-lg">
                <input
                  name="name"
                  type="text"
                  className="outline-none w-full"
                />
              </div>
            </div>
            <div className="flex flex-col text-sm col-span-6">
              <label>Description</label>
              <div className="border border-gray-200 p-2 rounded-lg">
                <textarea name="description" className="outline-none w-full" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button name="Save" />
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
    </>
  );
};

export default AddTab;
