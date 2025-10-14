import { postModel } from "../../post.schema.js";

export const toggleLike = async (req, res) => {
  const user = req.user;
  const params = req.params;
  const postId = params.postId;
  const post = await postModel.findById(postId);
  const postLikes = post.like;
  const isLiked = postLikes.includes(user._id);
  if (isLiked) {
    await postModel.findByIdAndUpdate(postId, {
      like: postLikes.filter((like) => like.toString() !== user._id),
    });
  } else {
    await postModel.findByIdAndUpdate(postId, {
      like: [...postLikes, user._id],
    });
  }
  res.status(200).json({ message: "successful" });
};
