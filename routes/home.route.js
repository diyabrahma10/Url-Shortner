import express from "express";
import { getHomePage, postUrl } from "../controllers/home.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";

export const homeRouter = express.Router();

homeRouter.use(verifyUser);
homeRouter.get('/', getHomePage);
homeRouter.post('/', postUrl);