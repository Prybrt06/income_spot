import Post from "../../models/post";
import User from "../../models/user";

const createPost = async (req, res, next) => {
	const doc = await User.findOne({ _id: req.user.id });

	const post = await Post.create({
		author: doc._id,
		title: req.body.title,
		companyName: req.body.companyName,
		experience: req.body.experience,
		experiencePeriod: req.body.experiencePeriod,
	});

	doc.posts.push(post._id);
	await doc.save();

	res.status(201);
	res.json({ post: post });
};

export default createPost;
