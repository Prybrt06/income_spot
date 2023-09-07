import { Router } from "express";
import { protect } from "../controllers/authController/auth";
import createComment from "../controllers/commentController/createComment";
import getAllComment from "../controllers/commentController/getAllComments";

const commentRoute = Router();

commentRoute.post("/:id", protect, createComment);

commentRoute.get("/:id", getAllComment);

export default commentRoute;
