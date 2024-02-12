import User from "@/models/userModel";
import Image from "next/image";
import AvatarIcon from "../components/commons/AvatarIcon";
import { connectToMongoDB } from "@/lib/db";
import Link from "next/link";
const ProfileSummary = async ({ session }: { session: any }) => {
  await connectToMongoDB();
  const user = await User.findOne({
    email: session?.user?.email,
  });
  return (
    <>
      <h1 className="font-bold">Profile Summary</h1>
      <div className="mt-5"></div>
      <div className=" w-full border border-slate-200 rounded-lg p-5 flex  flex-wrap flex-row items-center gap-10">
        <div className="flex flex-col justify-center gap-x-2.5">
          <div className="w-10 h-10">
            {user && user?.avatar !== "" ? (
              <Image
                alt="Profile Pic"
                src={user?.avatar || ""}
                unoptimized={true}
                className="h-10 w-10"
              />
            ) : (
              <AvatarIcon name={user?.name} />
            )}
          </div>
          <Link
            href={`https://veloxify.vercel.app/${user?.username}`}
            target="_blank"
            className="text-sm text-center text-blue-500 "
          >
            View
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm text-slate-400">Name</span>
          <span>{user?.name}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm text-slate-400">Username</span>
          <span>@{user?.username}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm text-slate-400">Bio</span>
          {user?.bio ? (
            <span>{user?.bio}</span>
          ) : (
            <span className="text-sm text-blue-600">Add a bio</span>
          )}
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm text-slate-400">Email</span>
          <span>{user?.email}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm text-slate-400">Links</span>
          <span>{user?.socials?.length}</span>
        </div>
      </div>
    </>
  );
};

export default ProfileSummary;
