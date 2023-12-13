const { Router } = require('express');
const router = Router();
const albumController = require('../controllers/albumController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:id', authMiddleware, albumController.getAlbumInfo);
router.get('/all', authMiddleware, albumController.getAlbumsList);
// Другие маршруты связанные с альбомами

module.exports = router;
