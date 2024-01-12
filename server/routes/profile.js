const express = require("express");
const Profile = require('../models/Profile');
const ProfileController = require("../controllers/ProfileController");
const router = express.Router();

// Получить профиль по ID пользователя
router.get("/id", ProfileController.getProfileById);

// Обновить профиль
router.put("/updateProfile", ProfileController.updateProfile);

module.exports = router;
