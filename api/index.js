import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";

const app = express();
dotenv.config();

// MONGODB CONNECTION START
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
// MONGODB CONNECTION END

//middlewares
app.use(express.json());
app.use("*", authRoute);
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);

// port
app.listen(8800, () => {
  connect();
  console.log("backend connected");
});
