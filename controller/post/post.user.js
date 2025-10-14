import { postModel } from "../../post.schema.js";

export const findUserPost = async (req, res) => {
  const user = req.user;
  const posts = await postModel.find({ userId: user._id }).populate("userId");
  res.json(posts);
};
