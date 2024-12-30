import mongoose from "mongoose";
const hotelSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model("Hotel", hotelSchema);
