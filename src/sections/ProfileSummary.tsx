import User from "@/models/userModel";
import Image from "next/image";
import AvatarIcon from "../components/commons/AvatarIcon";
import { connectToMongoDB } from "@/lib/db";
import Link from "next/link";
const ProfileSummary = async ({ session }: { session: any }) => {
  await connectToMongoDB();
  const user = await User.findOne({
    email: session?.user?.email,
  });
  return <></>;
};

export default ProfileSummary;
