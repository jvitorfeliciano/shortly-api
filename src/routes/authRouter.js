import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import {
  emailAndPasswordMatchValidation,
  emailExistenceValidation,
  signInSchemaValidation,
  signUpSchemaValidation,
} from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post(
  "/signup",
  signUpSchemaValidation,
  emailExistenceValidation,
  signUp
);
authRouter.post(
  "/signin",
  signInSchemaValidation,
  emailAndPasswordMatchValidation,
  signIn
);
export default authRouter;
