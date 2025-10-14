import { postModel } from "../../post.schema.js";

export const findUserPosts = async (req, res) => {
  const userId = req.params.userId;
  const posts = await postModel.find({ userId: userId });
  console.log(posts);
  res.status(200).json(posts);
};
