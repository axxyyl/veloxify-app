import { auth } from "@/auth";
import React from "react";
import Profile from "./Profile";
import Tabs from "./Tabs";

const LinksPage = async () => {
  const session = await auth();

  return (
    <>
      <div>
        <Profile session={session} />
      </div>
      <div>
        <Tabs session={session} />
      </div>
    </>
  );
};

export default LinksPage;
