import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Successfull connect database");
  } catch (error) {
    console.log(`Error with database connect: ${error.message}`);
    throw error;
  }
};
export default connectDatabase;
