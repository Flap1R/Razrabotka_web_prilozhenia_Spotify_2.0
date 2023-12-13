const { Router } = require('express');
const router = Router();
const trackQueueController = require('../controllers/trackQueueController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/user', authMiddleware, trackQueueController.getUserQueue);
router.post('/add', authMiddleware, trackQueueController.addToQueue);
router.delete('/remove/:id_track', authMiddleware, trackQueueController.removeFromQueue);
// Другие маршруты связанные с очередью треков

module.exports = router;
