import express from "express";
import { getHomePage } from "../controllers/home.controller.js";

export const homeRouter = express.Router();

homeRouter.get('/', getHomePage);