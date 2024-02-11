import PatternBackground from "@/components/backgrounds/PatternBackground";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import GithubIcon from "@/components/icons/GithubIcon";
import StarIcon from "@/components/icons/StarIcon";
import { connectToMongoDB } from "@/lib/db";
import User from "@/models/userModel";

export default async function Home() {
  // console.log("connecting");
  // await connectToMongoDB();

  // const exist = await User.findOne({
  //   username: "test",
  // });
  // if (!exist) {
  //   const newUser = await User.create({
  //     username: "test",
  //     password: "test",
  //     email: "test",
  //     fullName: "test test",
  //   });

  //   await newUser.save();
  // }

  return (
    <main className="flex min-h-screen flex-col relative p-10 container  mx-auto ">
      <div className="absolute right-2 top-0 opacity-[0.7] -z-10">
        <PatternBackground />
      </div>

      <nav className="flex justify-between">
        <div>
          <Link
            className="font-bold  font-mono text-black text-xl flex flex-row gap-2"
            href="/"
          >
            <Image
              width={27}
              height={27}
              src={logo}
              alt="Veloxify Logo"
              unoptimized={true}
              className=""
            />
            <span>veloxify</span>
          </Link>
        </div>
        <div className="font-semibold bg-black text-white flex items-center p-2 rounded-md text-sm">
          <span className="font-mono">Create Page</span>
        </div>
      </nav>

      <section className="flex items-center justify-center mt-5 flex-col">
        <div className="flex flex-col justify-center items-center mt-10">
          <Image src={logo} alt="veloxify logo" className="h-14 w-10 mb-10" />
          <span className="font-bold text-3xl font-mono text-center">
            Craft Your Digital Identity
          </span>
          <div className=" max-w-sm mx-auto mt-3 text-sm text-center">
            Craft your unique profile page that truly reflects you. Showcase
            your personality, talents, and interests all in one place!
          </div>
          <div className="flex gap-2 mt-5 items-center">
            <Link
              href="/login"
              className="bg-black text-white p-2 text-sm rounded-md  px-2 hover:bg-gray-800 duration-200 transition-colors"
            >
              Get Started
            </Link>
            <Link
              target="_blank"
              href="https://github.com/axxyyl/veloxify"
              className="bg-black text-white p-2 text-sm rounded-md  px-2 flex items-center gap-1 hover:bg-gray-800 duration-200 transition-colors"
            >
              <GithubIcon />
              Star on Github
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
