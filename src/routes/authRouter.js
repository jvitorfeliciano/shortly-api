import { Router } from "express";
import { validateSignUpSchema } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUpSchema);

export default authRouter;
