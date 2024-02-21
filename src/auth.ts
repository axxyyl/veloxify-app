"use server";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { authConfig } from "./auth.config";
import { connectToMongoDB } from "./lib/db";
import User from "./models/userModel";
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        await connectToMongoDB();
        const { email, password } = credentials;

        const found = await User.findOne({
          $or: [{ username: email }, { email: email }],
          password
        });

        if (found) {
          const user = {
            name: found?.name,
            password: "",
            email: found?.email,
            image: found?.avatar,
          };

          return user;
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token }) {
      return token;
    },
  },
});
