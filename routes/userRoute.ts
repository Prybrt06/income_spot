import { Router } from "express";
import { createUser } from "../controllers/createUser";
import { getAllUser, getOneUser } from "../controllers/getUser";

export const userRoute = Router();

userRoute.post("/", createUser);
userRoute.get("/:id", getOneUser);
userRoute.get("/", getAllUser);
