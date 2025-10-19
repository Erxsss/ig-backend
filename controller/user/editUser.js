import { userModel } from "../../users.schema.js";

export const editUser = (req, res) => {
  const user = req.user;
  const { bio, username, email, profilePic } = req.body;
  const editedUser = userModel.findByIdAndUpdate(user._id, {
    bio: bio,
    username: username,
    email: email,
    profilePic: profilePic,
  });
  res.status(200).json(editedUser);
};
