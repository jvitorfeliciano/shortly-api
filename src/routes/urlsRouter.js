import { Router } from "express";
import { postShortUrl } from "../controllers/urlsController.js";
import { validTokenValidation } from "../middlewares/authMiddleware.js";
import { urlExistenceValidation, urlSchemaValidation } from "../middlewares/urlsMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", validTokenValidation, urlSchemaValidation, postShortUrl);
urlsRouter.get("/urls/:id", urlExistenceValidation)
export default urlsRouter;
