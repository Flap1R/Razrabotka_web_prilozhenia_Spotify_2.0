const express = require("express");
const Playlist = require("../models/Playlist");
const PlaylistController = require("../controllers/PlaylistController");
const router = express.Router();

router.get("/", PlaylistController.getAllPlaylists);

router.post("/like", PlaylistController.likeSong);

router.post("/create", PlaylistController.createPlaylist);

module.exports = router;
