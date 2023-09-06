import { Router } from "express";
import { protect } from "../controllers/authController/auth";
import createPost from "../controllers/postController/createPost";
import getAllPost from "../controllers/postController/getAllPost";
import getPostFromOneUser from "../controllers/postController/getPostFromOneUser";

const postRoute = Router();

postRoute.post("/", protect, createPost);

postRoute.get("/", getAllPost);
postRoute.get("/user/:id", getPostFromOneUser);

export default postRoute;
