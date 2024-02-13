import { auth } from "@/auth";
import React from "react";
import Profile from "./Profile";

const LinksPage = async () => {
  const session = await auth();

  return (
    <>
      <div>
        <Profile session={session} />
      </div>
    </>
  );
};

export default LinksPage;
