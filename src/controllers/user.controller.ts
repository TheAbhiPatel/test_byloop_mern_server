import { RequestHandler } from "express";
import userModel from "../models/user.model";

export const getMe: RequestHandler = async (req, res, next) => {
  try {
    const userId = res.locals.userId;
    const user = await userModel.findById(userId).select("-password");
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "user not found." });
    res.status(200).json({ success: true, message: "user fetched.", user });
  } catch (error) {
    next(error);
  }
};
