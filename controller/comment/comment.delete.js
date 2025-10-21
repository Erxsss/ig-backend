import { commentModel } from "../../comment.schema.js";

export const deleteCom = async (req, res) => {
  const commentId = req.params.comId;
  await commentModel.findByIdAndDelete(commentId);
  res.status(200).json({ message: "Successful" });
};
