import express from "express";

const router = express.Router();

router.get("*", (res, req) => {
  req.send("hello main");
});
router.get("/", (req, res) => {
  res.send("Hello, this is from auth end point");
});

router.get("/register", (req, res) => {
  res.send("Hello, this is auth register endpoint");
});

export default router;
