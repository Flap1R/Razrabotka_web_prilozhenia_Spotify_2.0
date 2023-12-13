const { Router } = require('express');
const router = Router();
const artistController = require('../controllers/artistController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:id', authMiddleware, artistController.getArtistInfo);
router.get('/all', authMiddleware, artistController.getArtistsList);
// Другие маршруты связанные с исполнителями

module.exports = router;
