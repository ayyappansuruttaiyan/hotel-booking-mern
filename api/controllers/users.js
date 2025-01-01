import express from "express";
import User from "../models/User.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(200).json("registered successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
