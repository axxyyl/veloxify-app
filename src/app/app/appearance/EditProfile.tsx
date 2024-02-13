"use client";

import AvatarIcon from "@/components/commons/AvatarIcon";
import { IUser } from "@/models/userModel";
import { Session } from "next-auth";
import Image from "next/image";
import { useRef, useState } from "react";

const EditProfile = ({
  session,
  user,
}: {
  session: Session;
  user: IUser | null;
}) => {
  const [username, setUsername] = useState(user?.username);
  const [bio, setBio] = useState(user?.bio || "Add");
  return (
    <div>
      <h1>Profile</h1>
      <div className="rounded-lg border border-gray-200 p-10">
        <form className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 overflow-hidden shrink-0">
              {session?.user?.image === "" ? (
                <AvatarIcon name={session?.user?.name} />
              ) : (
                <Image
                  width={15}
                  height={14}
                  src="https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/426871024_3506019912948663_6564233975183278672_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGQqQzhYRSgT9IvmOoHte8p2KNnZaOC_m7Yo2dlo4L-bnUo3SqNf60MZp3TNzUnPrqzpF4MOhg9QhN0PUrooo_n&_nc_ohc=iLPcJ3ebfBUAX8KrvkN&_nc_ht=scontent.fceb1-1.fna&oh=00_AfAzmeC82SPJMyO6BoryHQJK2ETq3qsP4CL2LPgWKjvM7Q&oe=65CC84D8"
                  alt="Profile Picture"
                  unoptimized={true}
                  className="rounded-full w-10 h-10"
                />
              )}
            </div>
            <div className="flex flex-col w-full gap-2">
              <button className="border border-gray-200 rounded-lg p-3 text-gray-800">
                Add Picture
              </button>
              <button className="bg-black rounded-lg p-3 text-white">
                Remove Picture
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="group group-focus:border-black border bg-slate-200 flex flex-col px-2 p-2 rounded-xl">
              <span className="text-xs text-slate-600">
                Profile Display Name
              </span>
              <div className="flex">
                <span className="text-xs">@</span>
                <input
                  onChange={(e: any) => setUsername(e.target.value)}
                  type="text"
                  className="text-xs w-full group-focus:border-black focus:border-none outline-none bg-none bg-transparent"
                  value={`${username}`}
                />
              </div>
            </div>
            <div className="group group-focus:border-black border bg-slate-200 flex flex-col px-2 p-2 rounded-xl">
              <span className="text-xs text-slate-600">Bio</span>
              <div className="flex">
                <span
                  onClick={() => {
                    setBio("");
                  }}
                  className={`${
                    !bio.includes("Add") ? "hidden" : "flex flex-row"
                  } text-xs text-blue-600 cursor-pointer`}
                >
                  Add a bio
                </span>

                <>
                  <div
                    className={`${
                      bio.includes("Add") ? "hidden" : "flex flex-row"
                    }`}
                  >
                    <span className="text-xs">@</span>
                    <input
                      onChange={(e: any) => {
                        setBio(e.target.value);
                      }}
                      type="text"
                      className="text-xs w-full group-focus:border-black focus:border-none outline-none bg-none bg-transparent"
                      value={`${bio}`}
                    />
                  </div>
                </>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
