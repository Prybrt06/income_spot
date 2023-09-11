import User from "../../models/user";

const followUser = async (req, res, next) => {
	console.log("Hey");
	const id = req.params.id;
	const user = await User.findOne({ _id: req.user.id });

	const otherUser = await User.findOne({ _id: id });

	user.following.push(id);
	otherUser.followers.push(req.user.id);

	await user.save();
	await otherUser.save();

	res.status(201).json({ following: user.following });
};

export default followUser;
