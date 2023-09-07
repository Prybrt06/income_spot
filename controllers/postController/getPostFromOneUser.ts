import Post from "../../models/post";

const getPostFromOneUser = async (req, res, next) => {
	const id = req.params.id;
	const posts = await Post.findAllPostByOneUser(id);

	res.status(201);
	res.json({ posts: posts });
};

export default getPostFromOneUser;
