import { auth } from "@/auth";
import React, { Suspense } from "react";
import LogoutButton from "@/components/LogoutButton";
import ProfileSummary from "@/sections/ProfileSummary";
import CategorySection from "@/sections/Category";
const page = async () => {
  const session = await auth();
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
        <div>
          <Suspense fallback={<span>Loading...</span>}>
            <CategorySection session={session} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default page;
