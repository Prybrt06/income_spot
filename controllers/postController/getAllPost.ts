import Post from "../../models/post";

const getAllPost = async (req, res, next) => {
	const posts = await Post.find();

	res.status(201);
	res.json({ posts: posts });
};

export default getAllPost;
