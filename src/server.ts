import express from "express";
import morgar from "morgan";
import cors from "cors";
import mongoose from "mongoose";

export const app = express();

app.use(cors());
app.use(morgar("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const connect = (url) => {
	mongoose.connect(url);
};
