"use server";
import { auth, signIn } from "@/auth";
import { z } from "zod";
import { connectToMongoDB } from "./db";
import User from "@/models/userModel";
import { AuthError, Session } from "next-auth";
import email from "next-auth/providers/email";
import { error } from "console";
import Tab from "@/models/tabModel";

const schema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be at least 4 characters long" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?/~`\-|=\\'"\\]*/, {
      message: "Password must contain at least one special character",
    }),
  email: z.string().email({}),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username cannot be more than 20 characters long" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    }),
});

export const registerUser = async (prevState: any, formData: FormData) => {
  const validatedFields: any = schema.safeParse({
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return {
      message: "Fail",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  await connectToMongoDB();

  const existUsername = await User.findOne({
    username: formData.get("username"),
  });

  if (existUsername)
    return {
      message: "fail",
      errors: {
        username: ["User already Exist"],
      },
    };

  const existEmail = await User.findOne({
    email: formData.get("email"),
  });

  if (existEmail)
    return {
      message: "fail",
      errors: {
        email: ["Email address already Exist"],
      },
    };
  const newUser = await User.create({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
    name: formData.get("name"),
  });
  await newUser.save();
  console.log("dsa");
  await signIn("credentials", {
    email: formData.get("email"),
    password: formData.get("password"),
  });
};

export const addTab = async (prevState: any, formData: FormData) => {
  await connectToMongoDB();

  const session = await auth();
  const existName = await Tab.findOne({
    name: formData.get("name"),
  });

  if (existName) {
    return {
      message: "fail",
      errors: {
        name: ["Tab Name already exists."],
      },
    };
  }

  const newTab = await Tab.create({
    email: session?.user?.email,
    name: formData.get("name"),
    description: formData.get("description"),
  });

  await newTab.save();
  return {
    message: "Success",
    error: [],
  };
};
export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
