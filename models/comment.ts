import mongoose from "mongoose";

const comment = new mongoose.Schema({
	authod: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Post",
	},
	text: {
		type: String,
		required: true,
	},
	upvote: {
		type: Number,
		default: 0,
	},
	downvote: {
		type: Number,
		default: 0,
	},
});

const Comment = mongoose.model("Comment", comment);

export default Comment;
