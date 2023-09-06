import User from "../../models/user";
import {  createJWT } from "../authController/auth";

export const signin = async (req, res, next) => {
	const user = await User.findOne({
		userName: req.body.userName,
	});

	var isPasswordValid = user.comparePassword(req.body.password);

	if (!isPasswordValid) {
		res.status(401);
		res.json({ message: "Invalid password" });
		return;
	}

	const token = createJWT(user);
	res.status(201);
	res.json({ message: "Login successful", token: token });
};
