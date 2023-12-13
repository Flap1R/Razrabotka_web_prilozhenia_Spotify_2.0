const { Router } = require('express');
const router = Router();
const searchController = require('../controllers/searchController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/tracks', authMiddleware, searchController.searchTracks);
router.get('/albums', authMiddleware, searchController.searchAlbums);
router.get('/artists', authMiddleware, searchController.searchArtists);
// Другие маршруты связанные с поиском

module.exports = router;
