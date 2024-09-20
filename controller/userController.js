const USER_SCHEMA = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/createToken");

exports.register = asyncHandler(async (req, res) => {
  let { email } = req.body;
  let findUser = await USER_SCHEMA.findOne({ email });
  if (findUser) {
    throw new Error("user already exists1");
  }

  let addNewUser = await USER_SCHEMA.create(req.body)
  let findUser1 = await USER_SCHEMA.findOne({_id:addNewUser._id}).select("-password")
  res.status(201).json({ success: true, message: "user created successfully", findUser1 });
});

exports.fetch = asyncHandler(async (req, res) => {
  let findUsers = await USER_SCHEMA.find();
  if (findUsers.length==0) {
    throw new Error("user not  found");
  }
  res.status(201).json({ success: true, message: "user fetched successfully", findUsers });
});

exports.login = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  let findUser = await USER_SCHEMA.findOne({ email });
  if (!findUser) {
    throw new Error("user not found");
  }
  let isMatch = await findUser.matchPassword(password);

  if (!isMatch) {
    throw new Error("wrong password");
  }

  let token = generateToken(findUser._id);
  res.cookie("token", token, { httpOnly: true });

  res.status(200).json({ success: true, message: "user logged-in successfully", token });
});

exports.logout = asyncHandler(async (req, res) => {
  res.clearCookie("token", "", { expiresIn: "0" });
  res.status(200).json({ success: true, message: "user logged-out successfully" });
});
