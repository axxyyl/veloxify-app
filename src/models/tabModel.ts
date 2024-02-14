import mongoose, { Model } from "mongoose";
import { array } from "zod";
export interface ITab {
  email: string;
  name: string;
  categories?: [];
}

export interface ITabDocument extends ITab, Document {
  createdAt: Date;
  updatedAt: Date;
}
const tabSchema = new mongoose.Schema<ITabDocument>(
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
    categories: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Tab: Model<ITabDocument> =
  mongoose.models.Tab || mongoose.model("Tab", tabSchema);

export default Tab;
