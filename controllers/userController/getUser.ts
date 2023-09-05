import User from "../../models/user";

export const getOneUser = async (req, res, next) => {
	const id = req.params.id;
	const user = await User.findOne({ _id: id });

	res.status(201);
	res.json({ user: user });
};

export const getAllUser = async (_, res) => {
	const users = await User.find();

	res.status(201);
	res.json({ users: users });
};
