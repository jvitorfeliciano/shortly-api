import { Router } from "express";
import { getUrlById, postShortUrl } from "../controllers/urlsController.js";
import { validTokenValidation } from "../middlewares/authMiddleware.js";
import { urlExistenceValidation, urlSchemaValidation } from "../middlewares/urlsMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", validTokenValidation, urlSchemaValidation, postShortUrl);
urlsRouter.get("/urls/:id", urlExistenceValidation, getUrlById)
export default urlsRouter;
