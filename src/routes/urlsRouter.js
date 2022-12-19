import { Router } from "express";
import {
  getUrlById,
  postShortUrl,
  redirectToTheCorrespondingLink,
} from "../controllers/urlsController.js";
import { validTokenValidation } from "../middlewares/authMiddleware.js";
import {
  shortUrlExistenceValidation,
  urlExistenceValidation,
  urlOwnerValidation,
  urlSchemaValidation,
} from "../middlewares/urlsMiddleware.js";

const urlsRouter = Router();

urlsRouter.post(
  "/urls/shorten",
  validTokenValidation,
  urlSchemaValidation,
  postShortUrl
);
urlsRouter.get("/urls/:id", urlExistenceValidation, getUrlById);
urlsRouter.get(
  "/urls/open/:shortUrl",
  shortUrlExistenceValidation,
  redirectToTheCorrespondingLink
);
urlsRouter.delete("/urls/:id", validTokenValidation, urlExistenceValidation, urlOwnerValidation);
export default urlsRouter;
