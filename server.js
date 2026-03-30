import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import userRouter from "./router/user.route.js";
import postRouter from "./router/post.route.js";
import dotenv from "dotenv";
import commentRouter from "./router/comment.route.js";
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
const port = 5555;
const connectToDB = () => {
  mongoose.connect(
    ""
  );
};
connectToDB();
app.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
