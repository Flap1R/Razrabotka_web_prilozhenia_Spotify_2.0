const express = require("express");
const UserController = require("../controllers/UserController"); // Импортируем контроллер
const router = express.Router();

router.post("/login", UserController.loginUser);
router.post("/register", UserController.registerUser);
router.get("/me", UserController.getMe);
router.get("/users", UserController.getAllUsers);

module.exports = router;
