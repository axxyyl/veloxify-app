import AvatarIcon from "@/components/commons/AvatarIcon";
import Image from "next/image";
import EditProfile from "./EditProfile";
import { connectToMongoDB } from "@/lib/db";
import User from "@/models/userModel";

const Profile = async ({ session }: any) => {
  await connectToMongoDB();
  const resp = await User.findOne({
    email: session?.user?.email,
  });

  const user = {
    email: resp?.email as string,
    name: resp?.name as string,
    username: resp?.username as string,
    password: "",
    bio: resp?.bio,
    socials: resp?.socials,
    createdAt: resp?.createdAt,
    updatedAt: resp?.updatedAt,
  };
  return (
    <>
      <EditProfile session={session} user={user} />
    </>
  );
};

export default Profile;
