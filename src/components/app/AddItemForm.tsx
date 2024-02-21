"use client";
import useAddItemStore from "@/lib/store";
import Image from "next/image";
import { useState } from "react";
import { useFormState } from "react-dom";
import imageCompression from "browser-image-compression";
import { any } from "zod";
const AddItemForm = ({ tab_id }: { tab_id: any }) => {
  const { active, id } = useAddItemStore();
  const [image, setImage] = useState({
    image: "",
    id: id,
  });
  const handleImageChange = (e: any) => {
    const options = {
      maxSizeMB: 1.3, // Max size in MB
      maxWidthOrHeight: 1920, // Max width/height
      useWebWorker: true,
    };
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event: any) => {
        if (event.target) {
          const compressedFile = await imageCompression(file, options);
          setImage((prev) => ({
            ...prev,
            image: event.target.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div
        className={`w-full mt-4 transition-all duration-200 rounded-lg overflow-hidden ${
          active && id === tab_id ? "h-fit" : "h-0"
        }`}
      >
        <form className="flex flex-col gap-4 p-5 border border-gray-200 rounded-lg">
          <h1>Add An Item</h1>
          <input type="hidden" value={tab_id} />
          <div className="flex flex-col text-sm col-span-6 gap-2">
            <label>Image</label>

            {image.image == "" ? (
              <div className=" h-32 w-32 border border-gray-200 rounded-lg"></div>
            ) : (
              <Image
                src={image.image}
                width={30}
                height={30}
                unoptimized={true}
                alt="Uploaded image"
                className="h-32 w-32 rounded-lg"
              />
            )}
            <label className="block mt-2">
              <span className="sr-only">Choose profile photo</span>
              <input
                onChange={handleImageChange}
                type="file"
                className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
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
              <label>Name*</label>
              <div className="border border-gray-200 p-2 rounded-lg">
                <input
                  name="name"
                  placeholder="E.g Laptop"
                  type="text"
                  className="outline-none w-full"
                />
              </div>
            </div>
            <div className="flex flex-col text-sm col-span-6">
              <label>Description</label>
              <div className="border border-gray-200 p-2 rounded-lg">
                <textarea
                  name="name"
                  className="outline-none w-full h-36"
                  placeholder="Describe your item"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItemForm;
