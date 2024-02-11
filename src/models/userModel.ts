import mongoose, { Model } from "mongoose";
import { unique } from "next/dist/build/utils";
import { Social } from "@/types";
export interface IUser {
  username: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string | null;
  password: string;
  socials?: Social[];
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}
const userSchema = new mongoose.Schema<IUserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    avatar: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: null,
    },
    socials: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUserDocument> =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;
