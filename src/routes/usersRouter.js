import { Router } from "express";
import { getUsersUrls } from "../controllers/usersController.js";
import { validTokenValidation } from "../middlewares/authMiddleware.js";

const usersRouter = Router();

usersRouter.get("/users/me", validTokenValidation,getUsersUrls)

export default usersRouter;
