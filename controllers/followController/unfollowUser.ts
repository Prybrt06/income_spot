import User from "../../models/user";

const unfollowUser = async (req, res, next) => {
	const id = req.params.id;
	const user = await User.findOne({ _id: req.user.id });

	const otherUser = await User.findOne({ _id: id });

	user.updateOne({ $pull: { following: id } });
	otherUser.updateOne({ $pull: { followers: req.user.id } });

	await user.save();
	await otherUser.save();

	res.status(201).json({ following: user.following });
};

export default unfollowUser;
