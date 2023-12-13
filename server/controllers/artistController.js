const { Artist, Album, Track } = require('../models/models'); // Подключите свои модели
const ApiError = require('../error/ApiError');

class ArtistController {
    async getArtistInfo(req, res, next) {
        try {
            const { id } = req.params;

            const artist = await Artist.findOne({
                where: { id },
                include: [
                    {
                        model: Album,
                        attributes: ['id', 'name', 'duration'],
                    },
                    {
                        model: Track,
                        attributes: ['id', 'name', 'duration'],
                    },
                ],
            });

            if (!artist) {
                return next(ApiError.notFound('Исполнитель не найден'));
            }

            return res.json(artist);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getArtistsList(req, res, next) {
        try {
            const artists = await Artist.findAll({
                attributes: ['id', 'name', 'description'],
            });

            return res.json(artists);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new ArtistController();
