import Post from "../../models/post";

const getOnePost = async (req, res, next) => {
	const id = req.params.id;

	const post = await Post.find().searchUsingId(id);

	res.status(201);
	res.json({ post: post });
};

export default getOnePost;
