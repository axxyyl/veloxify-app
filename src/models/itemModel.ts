import mongoose from "mongoose";

export interface IItem {
  tab_id: string;
  email: string;
  name: string;
  image: string;
  description: string;
  external_link: string;
  price: number;
  type: string;
}

export interface IItemDocument extends IItem, Document {
  createdAt: Date;
  updatedAt: Date;
}
export const itemSchema = new mongoose.Schema<IItemDocument>(
  {
    tab_id: {
      type: String,
      required: true,
    },
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
    type: {
      type: String,
      default: "image",
    },
  },
  {
    timestamps: true,
  }
);
