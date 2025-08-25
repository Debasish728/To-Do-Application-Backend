import express from "express";
const router = express.Router();
import authRoutes from "./authRoutes.js";
import taskRoutes from "./taskRoutes.js";
router.use("/auth", authRoutes);
router.use("/task", taskRoutes);
export default router;
