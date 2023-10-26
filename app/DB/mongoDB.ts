import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Error in connecting with mongodb.");
  }
};

export default connectToMongo;
