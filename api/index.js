import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import userRoute from "./routes/users.js";
import roomRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
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
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Allows cookies to be sent
  })
);
app.use(cookieParser());
app.use(express.json());
// app.use("*", authRoute);
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);

//error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
  next();
});

// port
app.listen(8800, () => {
  connect();
  console.log("backend connected");
});
