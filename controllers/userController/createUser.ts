import User from "../../models/user";

export const createUser = async (req, res, next) => {
	const newUser = await User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		name: req.body.firstName + " " + req.body.lastName,
		userName: req.body.userName,
		currentCompany: req.body.currentCompany,
		email: req.body.email,
		phoneNo: req.body.phoneNo,
	});

	console.log(newUser);

	res.status(201);
	res.json({ user: newUser });
};
