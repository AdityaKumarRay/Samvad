import express from "express";
const router = express.Router();

import {
  signup,
  login,
  logout,
  getMe,
} from "../controllers/auth.controllers.js";

router.get("/me", getMe);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
