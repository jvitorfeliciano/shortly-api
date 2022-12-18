import { Router } from "express";
import { postUser } from "../controllers/authController.js";
import { checkEmailExistence, validateSignUpSchema } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUpSchema, checkEmailExistence, postUser);

export default authRouter;
