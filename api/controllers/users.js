import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
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
    const user = User.findOne({ username });
    if (!user) return next(createError(404, "User not found"));
  } catch (error) {
    res.status(500).json(error);
  }
};
