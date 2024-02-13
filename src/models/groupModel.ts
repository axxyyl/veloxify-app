import mongoose, { Model } from "mongoose";
import { array } from "zod";
export interface ICategory {
  email: string;
  name: string;
  collections?: [];
}

export interface ICategoryDocument extends ICategory, Document {
  createdAt: Date;
  updatedAt: Date;
}
const categorySchema = new mongoose.Schema<ICategoryDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    collections: {
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
