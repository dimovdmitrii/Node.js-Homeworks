import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connect Databasse");
  } catch (error) {
    console.log(`Error connect Database: ${error.message}`);
    throw error;
  }
};

export default connectDatabase;
