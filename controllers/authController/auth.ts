import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const comparePassword = (password, hashPassword) => {
	return bcrypt.compare(password, hashPassword);
};

export const hashPassword = (password) => {
	return bcrypt.hash(password, 5);
};

export const createJWT = (user) => {
	const token = jwt.sign(
		{
			id: user._id,
			userName: user.userName,
		},
		process.env.JWT_SECRET
	);

	return token;
};

export const protect = (req, res, next) => {
	const bearer = req.headers.authorization;

	if (!bearer) {
		res.status(401);
		res.json({ message: "Authorization required" });
		return;
	}

	const token = bearer.split(" ")[1];

	if (!token) {
		res.status(401);
		res.json({ message: "Invalid token" });
		return;
	}

	try {
		const user = jwt.verify(token, process.env.JWT_SECRET);
		req.user = user;
		next();
	} catch (e) {
		console.log(e);
		res.status(401);
		res.json({ message: "Invalid token" });
		return;
	}
};
