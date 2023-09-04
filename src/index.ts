import * as dotenv from "dotenv";
import { app, connect } from "./server";
import { userRoute } from "../routes/userRoute";
dotenv.config();

app.listen(4000, () => {
	connect("mongodb://localhost:27017/incomespot");
	console.log("Server starts at http://localhost:4000");
});

app.use("/user", userRoute);
