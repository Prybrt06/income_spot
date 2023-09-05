import User from "../../models/user";

export const deleteOneUser = async (req, res) => {
	const id = req.params.id;

	const user = await User.deleteOne({ _id: id });

	res.status(201);
	res.json({ deletedUser: user });
};
