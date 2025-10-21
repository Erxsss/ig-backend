import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { createComment } from "../controller/comment/comment.create.js";
import { findComments } from "../controller/comment/comment.find.js";
import { deleteCom } from "../controller/comment/comment.delete.js";

const commentRouter = express.Router();

commentRouter.post("/commentCreate", authMiddleware, createComment);
commentRouter.get("/get/:postId", authMiddleware, findComments);
commentRouter.delete("/deleteCom/:comId", authMiddleware, deleteCom);
export default commentRouter;
