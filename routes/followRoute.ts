import { Router } from "express";
import { protect } from "../controllers/authController/auth";
import followUser from "../controllers/followController/followUser";
import unfollowUser from "../controllers/followController/unfollowUser";

const followRoute = Router();

followRoute.post("/:id", protect, followUser);
followRoute.post("/remove/:id", protect, unfollowUser);

export default followRoute;
