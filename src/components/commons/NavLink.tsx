"use client";
import Link from "next/link";

export const NavLink = ({ Icon, name }: { Icon: any; name: string }) => {
  return (
    <>
      <Link
        className="  flex flex-row gap-1 items-center hover:bg-gray-200  p-1 rounded-md duration-300 transition-all"
        href="/app/links"
      >
        {Icon}
        {/* <span className={`text-sm font-semibold ${router.pathname === name.toLowerCase() ? 'text-black':}`}>{name}</span> */}
      </Link>
    </>
  );
};
