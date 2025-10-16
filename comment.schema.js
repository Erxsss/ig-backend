import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  post: { type: Schema.Types.ObjectId, required: true, ref: "posts" },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
});
export const commentModel = mongoose.model("comments", commentSchema);
