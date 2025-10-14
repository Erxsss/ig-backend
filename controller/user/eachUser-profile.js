import { postModel } from "../../post.schema.js";
import { userModel } from "../../users.schema.js";

export const findUserProfile = async (req, res) => {
  const user = req.params.user;
  const theUser = await userModel.findById(user);
  res.status(200).json(theUser);
};
