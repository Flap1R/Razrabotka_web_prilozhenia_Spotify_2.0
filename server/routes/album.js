const express = require("express");
const Album = require("../Models/Album");
const AlbumController = require("../controllers/AlbumController"); // Импортируем контроллер
const router = express.Router();

// Получить все альбомы
router.get("/", AlbumController.getAllAlbums);

// Получить информацию об альбоме по ID
router.get("/albumId", AlbumController.getAlbumById);

// Создать новый альбом
router.post("/createAlbum", AlbumController.createAlbum);

module.exports = router;
