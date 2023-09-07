import mongoose from "mongoose";

const post = new mongoose.Schema(
	{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
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
		comments: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: "Comment",
			default: [],
		},
		// companyName: {
		// 	type: String,
		// 	required: true,
		// },
		// experience: {
		// 	type: Number,
		// 	required: true,
		// },
		// experiencePeriod: {
		// 	type: String,
		// 	enum: ["year", "month"],
		// 	default: "year",
		// },
	},
	{
		statics: {
			async findAllPostByOneUser(id) {
				return await this.find({ author: id });
			},
		},
		query: {
			async searchUsingId(id) {
				return await this.findOne({ _id: id });
			},
		},
	}
);

const Post = mongoose.model("Post", post);

export default Post;
