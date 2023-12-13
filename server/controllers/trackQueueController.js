const { TrackQueue, Track } = require('../models/models');
const ApiError = require('../error/ApiError');

class TrackQueueController {
    async addToQueue(req, res, next) {
        try {
            const { id_track } = req.body;
            const { user } = req;

            const existingTrack = await TrackQueue.findOne({
                where: { id_user: user.id, id_track },
            });

            if (existingTrack) {
                return next(ApiError.badRequest('Трек уже добавлен в очередь'));
            }

            const trackQueueItem = await TrackQueue.create({
                id_user: user.id,
                id_track,
            });

            return res.json(trackQueueItem);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getUserQueue(req, res, next) {
        try {
            const { user } = req;

            const userQueue = await TrackQueue.findAll({
                where: { id_user: user.id },
                include: [{ model: Track, attributes: ['id', 'name', 'duration'] }],
            });

            return res.json(userQueue);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async removeFromQueue(req, res, next) {
        try {
            const { id_track } = req.params;
            const { user } = req;

            const deletedRowCount = await TrackQueue.destroy({
                where: { id_user: user.id, id_track },
            });

            if (deletedRowCount === 0) {
                return next(ApiError.notFound('Трек не найден в вашей очереди'));
            }

            return res.json({ message: 'Трек успешно удален из очереди' });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new TrackQueueController();
