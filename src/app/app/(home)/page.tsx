import { auth } from "../../../auth";
import React, { Suspense } from "react";
import Image from "next/image";
import { signOut } from "../../../auth";
import LogoutButton from "@/components/LogoutButton";
import { connectToMongoDB } from "@/lib/db";
import User from "@/models/userModel";
import Navbar from "@/components/commons/Navbar";
import AvatarIcon from "@/components/commons/AvatarIcon";
import Link from "next/link";
import ProfileSummary from "@/components/app/ProfileSummary";
const page = async () => {
  const session = await auth();
  await connectToMongoDB();

  return (
    <>
      <div className="flex flex-col gap-10 items-start  w-full mt-10">
        <h1>Welcome back, {session?.user?.name}!</h1>
        <LogoutButton />
        <div>
          <Suspense fallback={<span>Loading...</span>}>
            <ProfileSummary session={session} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default page;
