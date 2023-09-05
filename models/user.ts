import mongoose from "mongoose";

const user = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	phoneNo: {
		type: String,
		unique: true,
	},
	email: {
		type: String,
		unique: true,
	},
	currentCompany: {
		type: String,
	},
	posts: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Post",
		default: [],
	},
});

const User = mongoose.model("User", user);

export default User;
