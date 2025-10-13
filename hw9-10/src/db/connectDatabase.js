import sequelize from "./sequelize.js";

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connect Database");
  } catch (error) {
    console.log(`Error connect Database ${error.message}`);
    throw error;
  }
};
export default connectDatabase;
