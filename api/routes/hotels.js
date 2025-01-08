import express from "express";
import {
  getHotels,
  getHotelById,
  addHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//api end points for hotels
router.post("/", verifyAdmin, addHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/:id", verifyAdmin, getHotelById);
router.get("/", getHotels);

//api endpoints for user

export default router;
