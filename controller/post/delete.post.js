import { postModel } from "../../post.schema.js";

export const del = async (req, res) => {
  const postId = req.params.postId;
  await postModel.findByIdAndDelete(postId);
  res.status(200).json({ message: "Succesful" });
};
