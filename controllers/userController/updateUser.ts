import User from "../../models/user";

export const updateUser = async (req, res, next) => {
	const id = req.params.id;

	const doc = await User.findOne({ _id: id });

	const user = await doc.updateOne({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		name: req.body.firstName + " " + req.body.lastName,
		userName: req.body.userName,
		currentCompany: req.body.currentCompany,
		email: req.body.email,
		phoneNo: req.body.phoneNo,
	});

	res.status(201);
	res.json({ updatedUser: user });
};
