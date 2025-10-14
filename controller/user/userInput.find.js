import { userModel } from "../../users.schema.js";

export const findUser = async (req, res) => {
  const input = req.params.input;
  const users = await userModel.find({ username: input });
  res.status(200).json(users);
};
