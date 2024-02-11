"use client";
import { signOut } from "@/auth";

const LogoutButton = () => {
  return <button onClick={() => signOut()}>Logoit</button>;
};

export default LogoutButton;
