import { commentModel } from "../../comment.schema.js";

export const findComments = async (req, res) => {
  const postId = req.params.postId;
  const comments = await commentModel
    .find({
      post: postId,
    })
    .populate("post")
    .populate("user");
  res.status(200).json(comments, { long: comments.length });
};
