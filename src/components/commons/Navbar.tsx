import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import LinkIcon from "../icons/LinkIcon";
import FolderIcon from "../icons/FolderIcon";
import { auth } from "@/auth";
import AvatarIcon from "./AvatarIcon";
const Navbar = async () => {
  const session = await auth();
  return (
    <>
      <nav className="border border-slate-200  rounded-md md:rounded-full w-full p-1 px-2 md:p-3 flex justify-between gap-4">
        <div className="flex gap-8 items-center">
          <Link
            className="font-bold  font-mono text-black text-xl flex flex-row gap-2"
            href="/app"
          >
            <Image
              width={24}
              height={24}
              src={logo}
              alt="Veloxify Logo"
              unoptimized={true}
              className=""
            />
          </Link>
          <Link
            className="  flex flex-row gap-1 items-center hover:bg-gray-200  p-1 rounded-md duration-300 transition-all"
            href="/app/categories"
          >
            <FolderIcon />
            <span className="text-sm font-semibold text-slate-600">
              Categories
            </span>
          </Link>
          <Link
            className="  flex flex-row gap-1 items-center hover:bg-gray-200  p-1 rounded-md duration-300 transition-all"
            href="/app/links"
          >
            <LinkIcon />
            <span className="text-sm font-semibold text-slate-600">Links</span>
          </Link>
        </div>
        <Link
          href="/app/account"
          className="w-10 h-10 overflow-hidden rounded-full hover:border border-gray-600 p-1"
        >
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
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
