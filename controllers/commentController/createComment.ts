import Comment from "../../models/comment";
import Post from "../../models/post";
import User from "../../models/user";

const createComment = async (req, res, next) => {
	const post = await Post.find().searchUsingId(req.params.id);
	const user = await User.findOne({ _id: req.user.id });

	const comment = await Comment.create({
		authod: user._id,
		post: post._id,
		text: req.body.text,
	});

	post.comments.push(comment._id);
	await post.save();

	res.status(201).json({ comment: comment });
};

export default createComment;
