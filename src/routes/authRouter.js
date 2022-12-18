import { Router } from "express";
import { postUser } from "../controllers/authController.js";
import {
  checkEmailExistence,
  validateSignInSchema,
  validateSignUpSchema,
} from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUpSchema, checkEmailExistence, postUser);
authRouter.post("/signin", validateSignInSchema);
export default authRouter;
