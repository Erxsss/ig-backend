import { userModel } from "../../users.schema.js";

export const editUser = async (req, res) => {
  const user = req.user;
  const { bio, username, email, profilePic } = req.body;
  const editedUser = await userModel.findByIdAndUpdate(
    user._id,
    {
      bio: bio,
      username: username,
      email: email,
      profilePic: profilePic,
    },
    { new: true }
  );
  res.status(200).json(editedUser);
};
