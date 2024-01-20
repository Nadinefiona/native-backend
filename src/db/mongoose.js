import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dburl = process.env.DB_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(dburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully!");
  } catch (error) {
    console.error({ error: error.message });
  }
};

const disconnectDb = async () => {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected successfully!");
  } catch (error) {
    console.error({ error: error.message });
  }
};

const dropDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();
  } catch (error) {
    console.error({ error: error.message });
  }
};

export { connectDb, disconnectDb, dropDatabase };
