import { Router } from "express";
import { postUser } from "../controllers/authController.js";
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
  postUser
);
authRouter.post(
  "/signin",
  signInSchemaValidation,
  emailAndPasswordMatchValidation
);
export default authRouter;
