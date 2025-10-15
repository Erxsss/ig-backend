import { postModel } from "../../post.schema.js";

export const findEachPost = async (req, res) => {
  const postId = req.params.postId;
  const post = await postModel.findById(postId);
  res.status(200).json(post);
};
