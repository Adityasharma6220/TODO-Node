const jwt = require("jsonwebtoken");
const USER_SCHEMA = require("../models/userModel");
const { JWT_SECRET } = require("../config");
const expressAsyncHandler = require("express-async-handler");

exports.authenticate = expressAsyncHandler(async (req, res, next) => {
  let token = req?.cookies?.token;
  if (token) {
    if (token === null) {
      throw new Error("no token");
    }
    let decode = jwt.verify(token, JWT_SECRET);
    let user = await USER_SCHEMA.findOne({ _id: decode.id });
    if (!user) {
      throw new Error("no user found");
    }
    req.user = user;
    next();
  } else {
    console.log("no token");
    throw new Error("please login again");
  }
});
exports.isAdmin = (req, res, next) => {
  console.log(req.user);
  if (req.user.role === "admin") {
    next();
  } else {
    throw new Error("not authorized to access this resource");
  }
};
