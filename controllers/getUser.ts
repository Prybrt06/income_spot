import User from "../models/user";

export const getAllUser = async (req, res, next) => {
	const users = await User.find();

	res.status(201);
	res.json({ users: users });
};
