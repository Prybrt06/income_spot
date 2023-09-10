import User from "../../models/user";
import { createJWT } from "../authController/auth";

export const createUser = async (req, res, next) => {
	const newUser = await User.create({
		name: {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		},
		userName: req.body.userName,
		currentCompany: req.body.currentCompany,
		email: req.body.email,
		phoneNo: req.body.phoneNo,
	});

	await newUser.hashPassword();
	newUser.fetchFullName();
	await newUser.save();

	const token = createJWT(newUser);

	console.log(newUser);

	res.status(201);
	res.json({ user: newUser, token: token });
};
