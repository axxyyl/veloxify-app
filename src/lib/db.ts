import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
  if (cachedConnection) {
    console.log("Using cached connection");
    return cachedConnection;
  }
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI as string);

    cachedConnection = con.connection;
    console.log("MongoDB Connected!");

    return cachedConnection;
  } catch (e) {
    console.log(`Cant connect MongoDB: ${e}`);

    throw e;
  }
}
