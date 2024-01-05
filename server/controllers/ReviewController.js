const Review = require("../Models/Review");

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json({ reviews, success: true, message: "Reviews found" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.createReview = async (req, res) => {
  try {
    const { user, song, rating, comment } = req.body;

    // Проверка наличия обязательных полей
    if (!user || !song || !rating) {
      return res.status(400).json({ success: false, message: "User, song, and rating are required fields" });
    }

    const review = await Review.create({ user, song, rating, comment });
    res.json({ review, success: true, message: "Review created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
