const { Router } = require("express");
const { addTask, fetchAll } = require("../controller/taskController");
const { authenticate } = require("../middleware/auth");

const router = Router();

router.post("/add", authenticate, addTask);
router.get("/all", authenticate, fetchAll);

module.exports = router;
