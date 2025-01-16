import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(200).json("registered successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findOne({ username: username });

    if (!user) return res.status(404).json("user not found");

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(500).json("Username or passwrod incorrect");

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY
    );
    const { passkey, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
      })
      .status(200)
      .json({ ...otherDetails });
    console.log(isPasswordCorrect);
  } catch (error) {
    res.status(500).json(error);
  }
};
