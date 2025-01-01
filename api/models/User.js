import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, min: 6, max: 16 },
    isAdmin: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
