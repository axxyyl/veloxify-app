"use server";

import Category from "@/models/categoryModel";
import { connectToMongoDB } from "./db";

export const getUserCategories = async ({
  email,
}: {
  email: string | null | undefined;
}) => {
  await connectToMongoDB();
  const categories = Category.find({
    email: email,
  });

  console.log(categories);
};
