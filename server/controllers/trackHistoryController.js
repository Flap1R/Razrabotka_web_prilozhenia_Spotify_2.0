const { TrackHistory, Track } = require('../models/models'); // Подключите свои модели
const ApiError = require('../error/ApiError');

class TrackHistoryController {
    async addToHistory(req, res, next) {
        try {
            const { id_track } = req.body;
            const { user } = req;

            const trackHistoryItem = await TrackHistory.create({
                id_user: user.id,
                id_track,
            });

            return res.json(trackHistoryItem);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getUserHistory(req, res, next) {
        try {
            const { user } = req;

            const userHistory = await TrackHistory.findAll({
                where: { id_user: user.id },
                include: [{ model: Track, attributes: ['id', 'name', 'duration'] }],
            });

            return res.json(userHistory);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async clearHistory(req, res, next) {
        try {
            const { user } = req;

            await TrackHistory.destroy({
                where: { id_user: user.id },
            });

            return res.json({ message: 'История прослушивания очищена' });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new TrackHistoryController();
