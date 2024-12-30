import express from "express";
import {
  getHotels,
  getHotelById,
  addHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotels.js";

const router = express.Router();

//api end points for hotels
router.post("/", addHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/:id", getHotelById);
router.get("/", getHotels);

//api endpoints for user

export default router;
