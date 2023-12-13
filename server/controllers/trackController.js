const { Track } = require('../models/models'); // Подключите свою модель Track
const ApiError = require('../error/ApiError');

class TrackController {
    async createTrack(req, res, next) {
        try {
            const { name, duration, id_artist, path128, path320 } = req.body;

            const track = await Track.create({
                name,
                duration,
                id_artist,
                path128,
                path320,
            });

            return res.json(track);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getTrackDetails(req, res, next) {
        try {
            const { id } = req.params;

            const track = await Track.findByPk(id);

            if (!track) {
                return next(ApiError.notFound('Трек не найден'));
            }

            return res.json(track);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateTrack(req, res, next) {
        try {
            const { id } = req.params;
            const { name, duration, id_artist, path128, path320 } = req.body;

            const [updatedRowsCount, updatedTracks] = await Track.update(
                {
                    name,
                    duration,
                    id_artist,
                    path128,
                    path320,
                },
                {
                    where: { id },
                    returning: true,
                    plain: true,
                }
            );

            if (updatedRowsCount === 0) {
                return next(ApiError.notFound('Трек не найден'));
            }

            return res.json(updatedTracks);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteTrack(req, res, next) {
        try {
            const { id } = req.params;

            const deletedRowCount = await Track.destroy({
                where: { id },
            });

            if (deletedRowCount === 0) {
                return next(ApiError.notFound('Трек не найден'));
            }

            return res.json({ message: 'Трек успешно удален' });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new TrackController();
