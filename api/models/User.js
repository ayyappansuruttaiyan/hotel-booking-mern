import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true, min: 6, max: 16 },
});

export default mongoose.model("User", UserSchema);
