import mongoose, { Model } from "mongoose";
import { array } from "zod";
import { IItem, itemSchema } from "./itemModel";
export interface ITab {
  _id: Object;
  email: string;
  enabled: boolean;
  name: string;
  description: string;
  clicks: number;
  position: number;
  items?: IItem[];
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
      unique: true,
    },
    position: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    email: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default: [itemSchema],
    },
  },
  {
    timestamps: true,
  }
);

const Tab: Model<ITabDocument> =
  mongoose.models.Tab || mongoose.model("Tab", tabSchema);

export default Tab;
