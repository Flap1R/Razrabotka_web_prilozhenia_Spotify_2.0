const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:trackId', authMiddleware, trackController.getTrackDetails);
router.post('/create', authMiddleware, trackController.createTrack);
router.put('/:trackId/update', authMiddleware, trackController.updateTrack);
router.delete('/:trackId/delete', authMiddleware, trackController.deleteTrack);
// Другие маршруты связанные с треками

module.exports = router;