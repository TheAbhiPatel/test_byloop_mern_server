import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  try {
    console.log("---------> error Start <---------");
    console.log("Gobal catched error :: ", err);
    console.log("---------> error End !! <---------");
    res.status(500).json({ success: false, message: "Something went wrong." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
