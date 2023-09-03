import * as dotenv from "dotenv";
import { app, connect } from "./server";
import { createUser } from "../controllers/createUser";
dotenv.config();

app.listen(4000, () => {
	connect("mongodb://localhost:27017/attender");
	console.log("Server starts at http://localhost:4000");
});

app.post("/user", createUser);
