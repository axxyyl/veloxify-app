import mongoose, { Model } from "mongoose";
import { Social } from "@/types";
export interface ICategory {
  username: string;
  title: string;
  items?: [];
}

export interface ICategoryDocument extends ICategory, Document {
  createdAt: Date;
  updatedAt: Date;
}
const categorySchema = new mongoose.Schema<ICategoryDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Category: Model<ICategoryDocument> =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
