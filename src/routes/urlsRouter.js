import { Router } from "express";
import { postShortUrl } from "../controllers/urlsController.js";
import { validTokenValidation } from "../middlewares/authMiddleware.js";
import { urlSchemaValidation } from "../middlewares/urlsMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", validTokenValidation, urlSchemaValidation, postShortUrl);

export default urlsRouter;
