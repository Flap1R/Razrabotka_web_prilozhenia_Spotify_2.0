const express = require("express");
const Review = require('../Models/Review');
const ReviewController = require("../controllers/ReviewController");
const router = express.Router();

// Получить обзор по ID пользователя
router.get("/:userId", ReviewController.getAllReviews);

// Обновить обзор
router.post("/updateReview", ReviewController.createReview);

module.exports = router;
