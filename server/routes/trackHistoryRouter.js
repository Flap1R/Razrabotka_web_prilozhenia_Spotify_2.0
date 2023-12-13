const { Router } = require('express');
const router = Router();
const trackHistoryController = require('../controllers/trackHistoryController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/user', authMiddleware, trackHistoryController.getUserHistory);
router.post('/add', authMiddleware, trackHistoryController.addToHistory);
router.delete('/clear', authMiddleware, trackHistoryController.clearHistory);
// Другие маршруты связанные с историей прослушивания

module.exports = router;
