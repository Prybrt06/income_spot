import mongoose from "mongoose";

const post = new mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	title: {
		type: String,
		required: true,
	},
	companyName: {
		type: String,
		required: true,
	},
	experience: {
		type: Number,
		required: true,
	},
	experiencePeriod: {
		type: String,
		enum: ["year", "month"],
		default: "year",
	},
});
