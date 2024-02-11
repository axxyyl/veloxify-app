"use client";
import Image from "next/image";
import AvatarIcon from "./AvatarIcon";
const AvatarDropdown = ({ session }: { session: any }) => {
  return (
    <>
      <div className="relative">
        <div className=" cursor-pointer w-10 h-10 overflow-hidden">
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

          <div className="w-30 h-30 bg-black absolute left-[-130px]">
            sddasdasdadsadas
          </div>
        </div>
      </div>

      {/* <div className="w-7 h-7 relative flex flex-col items-center group shrink-0">
        <button
          type="button"
          className="rounded-full w-7 h-7 bg-white/30 overflow-hidden"
        >
          {session?.user?.image === "" ? (
            <AvatarIcon name={session?.user?.name} />
          ) : (
            <Image
              src="https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/426871024_3506019912948663_6564233975183278672_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGQqQzhYRSgT9IvmOoHte8p2KNnZaOC_m7Yo2dlo4L-bnUo3SqNf60MZp3TNzUnPrqzpF4MOhg9QhN0PUrooo_n&_nc_ohc=iLPcJ3ebfBUAX8KrvkN&_nc_ht=scontent.fceb1-1.fna&oh=00_AfAzmeC82SPJMyO6BoryHQJK2ETq3qsP4CL2LPgWKjvM7Q&oe=65CC84D8"
              alt="banner anime"
              width={300}
              height={300}
              loading="lazy"
              unoptimized={true}
              className="w-full h-full object-cover rounded-full"
            />
          )}
        </button>
        <div className="mt-5 text-gray-900  absolute z-50 w-36 text-center -bottom-20  shadow-2xl  bg-secondary  rounded-md font-karla font-medium  group-hover:visible group-hover:opacity-100 duration-300 transition-all md:grid place-items-center gap-1">
          <a className="hover:bg-slate-100 w-full cursor-pointer py-2">
            Profile
          </a>
          <button
            // onClick={() => signOut()}
            type="button"
            className="hover:bg-slate-100 w-full cursor-pointer py-2"
          >
            Log out
          </button>
        </div>
      </div> */}
    </>
  );
};

export default AvatarDropdown;
