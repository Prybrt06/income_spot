import User from "../../models/user";
import { createJWT } from "../authController/auth";

export const createUser = async (req, res, next) => {
	const newUser = await User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		name: req.body.firstName + " " + req.body.lastName,
		password: "",
		userName: req.body.userName,
		currentCompany: req.body.currentCompany,
		email: req.body.email,
		phoneNo: req.body.phoneNo,
	});

	await newUser.hashPassword();
	await newUser.save();

	const token = createJWT(newUser);

	console.log(newUser);

	res.status(201);
	res.json({ user: newUser, token: token });
};
