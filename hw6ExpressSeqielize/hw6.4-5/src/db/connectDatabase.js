import sequelize from "./sequelize.js";

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to database");
  } catch (error) {
    console.log(`Error connecting to database: ${error.message}`);
    throw error;
  }
};

export default connectDatabase;
