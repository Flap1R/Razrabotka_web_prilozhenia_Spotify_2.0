const express = require("express");
const Artist = require("../models/Artist");
const ArtistController = require("../controllers/ArtistController"); // Импортируем контроллер
const router = express.Router();

// Получить всех артистов
router.get("/", ArtistController.getAllArtists);

// Получить информацию об артисте по ID
router.get("/artistId", ArtistController.getArtistById);

// Создать нового артиста
router.post("/createArtist", ArtistController.createArtist);

module.exports = router;
