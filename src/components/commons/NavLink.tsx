"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  Icon,
  name,
  url,
}: {
  Icon: any;
  name: string;
  url: string;
}) => {
  const path = usePathname();
  return (
    <>
      <Link
        className="  flex flex-row gap-1 items-center hover:bg-gray-200  p-1 rounded-md duration-300 transition-all"
        href={url}
      >
        {Icon}
        <span
          className={`text-sm  ${
            path.toString().replace("/app/", "") === name.toLowerCase()
              ? "text-black font-bold"
              : "text-slate-600 font-semibold"
          }`}
        >
          {name}
        </span>
      </Link>
    </>
  );
};
