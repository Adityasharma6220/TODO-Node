const express = require("express");
const { PORT } = require("./config");
const { connectDB } = require("./config/db");
const { error } = require("./middleware/error");
const userRouter = require("./router/userRouter");
const taskRoute = require("./router/taskRouter");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(morgan("dev"));
app.use(cookieParser());

app.use("/users", userRouter);
app.use("/tasks", taskRoute);

connectDB();

app.use(error);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server running at http://localhost:${PORT}`);
});
