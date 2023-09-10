import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const user = new mongoose.Schema(
	{
		name: {
			firstName: {
				type: String,
				required: true,
			},
			lastName: {
				type: String,
				required: true,
			},
		},
		fullName: {
			type: String,
			default: " ",
		},
		userName: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			default: " ",
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
		followers: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: "User",
			default: [],
		},
		following: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: "User",
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

			fetchFullName() {
				this.fullName = this.name.firstName + " " + this.name.lastName;
			},
		},
		virtuals: {
			
		}
	}
);

const User = mongoose.model("User", user);

export default User;
