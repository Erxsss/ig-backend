import { userModel } from "../../users.schema.js";

export const followToggle = async (req, res) => {
  const followedUserId = req.params.followedUserId;
  console.log(followedUserId);
  const followingUserId = req.user._id;
  console.log(followingUserId);
  if (followedUserId === followingUserId) {
    res.status(400).json({ message: "Cant follow yourself" });
    return;
  }
  const followingUser = await userModel.findById(followingUserId);
  const followedUser = await userModel.findById(followedUserId);
  const followers = followedUser.followers;
  const isFollowed = followers.includes(followingUserId);
  if (isFollowed) {
    await userModel.findByIdAndUpdate(followingUserId, {
      following: followingUser.following.filter(
        (item) => item.toString() !== followedUserId
      ),
    });
    await userModel.findByIdAndUpdate(followedUserId, {
      followers: followedUser.followers.filter(
        (item) => item.toString() !== followingUserId
      ),
    });
  } else {
    await userModel.findByIdAndUpdate(followingUserId, {
      following: [...followingUser.following, followedUserId],
    });
    await userModel.findByIdAndUpdate(followedUserId, {
      followers: [...followedUser.followers, followingUser],
    });
  }
  res.status(200).json({ message: "Successful" });
};
