import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("mongodb connected successfully");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () =>
  console.log("mongodb disconnected. Check mongodb network access")
);

mongoose.connection.on("connected", () =>
  console.log("mongodb connected. You are good to go")
);
app.listen(8800, () => {
  connect();
  console.log("backend connected");
});
