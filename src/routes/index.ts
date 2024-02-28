import { Router } from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";
import { privateRoutes } from "../middlewares/privateRoutes";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", privateRoutes, userRouter);

export default router;
