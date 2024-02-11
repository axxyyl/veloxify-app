import { auth } from "../../../auth";
import React from "react";
import Image from "next/image";
import { signOut } from "../../../auth";
import LogoutButton from "@/components/LogoutButton";
import { connectToMongoDB } from "@/lib/db";
import User from "@/models/userModel";
import Navbar from "@/components/commons/Navbar";
const page = async () => {
  // const session = await auth();
  // await connectToMongoDB();

  // const user = await User.findOne({
  //   email: session?.user?.email,
  // });

  console.log("render");

  return (
    <>
      asdsa
      <div className="flex flex-col items-center gap-4">
        {/* <Image
          width={40}
          height={20}
          src="https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/426871024_3506019912948663_6564233975183278672_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGQqQzhYRSgT9IvmOoHte8p2KNnZaOC_m7Yo2dlo4L-bnUo3SqNf60MZp3TNzUnPrqzpF4MOhg9QhN0PUrooo_n&_nc_ohc=iLPcJ3ebfBUAX8KrvkN&_nc_ht=scontent.fceb1-1.fna&oh=00_AfAzmeC82SPJMyO6BoryHQJK2ETq3qsP4CL2LPgWKjvM7Q&oe=65CC84D8"
          alt="Profile Picture"
          unoptimized={true}
          className="rounded-full w-40 h-40"
        />
        <h1 className="font-semibold">{session?.user?.name}</h1>
        {user?.bio ? (
          <p className="text-sm ">{user?.bio}</p>
        ) : (
          <p className="text-blue-600 cursor-pointer">Add a bio</p>
        )} */}
        <LogoutButton />
      </div>
    </>
  );
};

export default page;
