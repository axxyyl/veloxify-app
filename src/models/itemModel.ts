import mongoose, { Model } from "mongoose";
import { array } from "zod";
export interface IItem {
  email: string;
  name: string;
  image: string;
  description: string;
  external_link: string;
  price: number;
}

export interface IItemDocument extends IItem, Document {
  createdAt: Date;
  updatedAt: Date;
}
const itemSchema = new mongoose.Schema<IItemDocument>(
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
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    external_link: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Item: Model<IItemDocument> =
  mongoose.models.Tab || mongoose.model("Tab", itemSchema);

export default Item;
