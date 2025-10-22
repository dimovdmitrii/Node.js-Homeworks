import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Database connect error: ${error.message}`);
    throw error;
  }
};
export default connectDatabase;
