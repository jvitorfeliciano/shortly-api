import { Router } from "express";
import { checkEmailExistence, validateSignUpSchema } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUpSchema, checkEmailExistence);

export default authRouter;
