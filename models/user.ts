import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const user = new mongoose.Schema(
	{
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
	},
	{
		methods: {
			async hashPassword() {
				this.password = await bcrypt.hash(this.password, 5);
			},

			comparePassword(actualPassword) {
				const hashPassword = this.password;
				return bcrypt.compare(actualPassword, this.password);
			},
		},
	}
);

const User = mongoose.model("User", user);

export default User;
