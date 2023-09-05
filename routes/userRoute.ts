import { Router } from "express";
import { createUser } from "../controllers/userController/createUser";
import { deleteOneUser } from "../controllers/userController/deleteUser";
import { getOneUser, getAllUser } from "../controllers/userController/getUser";
import { updateUser } from "../controllers/userController/updateUser";

export const userRoute = Router();

userRoute.post("/", createUser);

userRoute.get("/:id", getOneUser);
userRoute.get("/", getAllUser);

userRoute.delete("/:id", deleteOneUser);

userRoute.put("/:id", updateUser);
