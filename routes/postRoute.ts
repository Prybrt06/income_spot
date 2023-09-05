import { Router } from "express";
import { protect } from "../controllers/authController/auth";
import createPost from "../controllers/postController/createPost";
import getAllPost from "../controllers/postController/getAllPost";

const postRoute = Router();

postRoute.post("/", protect, createPost);

postRoute.get("/", getAllPost);

export default postRoute;
