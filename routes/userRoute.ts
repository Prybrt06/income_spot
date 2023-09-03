import { Router } from "express";
import { createUser } from "../controllers/createUser";
import { getAllUser } from "../controllers/getUser";

export const userRoute = Router();

userRoute.post("/", createUser);
userRoute.get("/", getAllUser);
