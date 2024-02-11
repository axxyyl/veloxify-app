import Navbar from "@/components/commons/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col relative p-4 md:p-5 max-w-4xl  mx-auto  items-center">
      <Navbar />
      {children}
    </div>
  );
}
