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
	},
	phoneNo: {
		type: String,
	},
	email: {
		type: String,
	},
	currentCompany: {
		type: String,
	},
});

const User = mongoose.model("User", user);

export default User;
