const TASK_SCHEMA = require("../models/taskModel.js");
const asyncHandler = require("express-async-handler");

exports.addTask = asyncHandler(async (req, res) => {
  const { title, description, status } = req.body;
  let addTask = await TASK_SCHEMA.create({
    title,
    description,
    status,
    user: req.user._id,
  });

  res.status(201).json({ success: true, message: "task created successfully", addTask });
});

exports.fetchAll = asyncHandler(async (req, res) => {
  let tasks = await TASK_SCHEMA.find({ user: req.user._id,  });
  if (tasks.length == 0) {
    throw new Error("no tasks found");
  }
  res.status(200).json({ success: true, message: "task fetched successfully", tasks });
});
