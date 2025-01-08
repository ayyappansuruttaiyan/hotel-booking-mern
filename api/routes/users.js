import express from "express";
import {
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

////api endpoints for user
// router.get("/checkAuthentication", verifyToken, (req, res) => {
//   res.send("Hello user, you are logged in");
// });

// router.get("/checkUser/:id", verifyUser, (req, res) => {
//   res.send("Hello user, you are logged in and you can delete your account");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res) => {
//   res.send("Hello Admin, you are logged in and you can delete all account");
// });

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUserById);
router.get("/", verifyAdmin, getUsers);

export default router;
