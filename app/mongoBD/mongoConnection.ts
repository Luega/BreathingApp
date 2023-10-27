import mongoose from "mongoose";

const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
};

export default connectToMongo;
