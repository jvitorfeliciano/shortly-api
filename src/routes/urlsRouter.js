import { Router } from "express";
import { validTokenValidation } from "../middlewares/authMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", validTokenValidation);

export default urlsRouter;
