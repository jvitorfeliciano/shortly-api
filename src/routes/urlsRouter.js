import { Router } from "express";
import { validTokenValidation } from "../middlewares/authMiddleware.js";
import { urlSchemaValidation } from "../middlewares/urlsMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", validTokenValidation, urlSchemaValidation);

export default urlsRouter;
