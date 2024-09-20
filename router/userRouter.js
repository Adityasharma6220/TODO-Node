const { Router } = require("express");
const { register, login, logout, fetch } = require("../controller/userController");
const { authenticate, isAdmin } = require("../middleware/auth");

const router = Router();

router.post("/signup", register);
router.get("/all", authenticate, isAdmin, fetch);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
