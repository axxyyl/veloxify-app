"use client";
import HolyLoader from "holy-loader";
import { SessionProvider } from "next-auth/react";
export default function Provider({ children }: any) {
  return (
    <>
      <SessionProvider>
        <HolyLoader
          color="#000"
          height="4.5px"
          speed={250}
          easing="linear"
          showSpinner
        />
        {children}
      </SessionProvider>
    </>
  );
}
