import Comment from "../../models/comment";

const getAllComment = async (req, res, next) => {
	const postId = req.params.id;
	const posts = await Comment.find({ post: postId });

	res.status(201).json({ posts: posts });
};

export default getAllComment;
 