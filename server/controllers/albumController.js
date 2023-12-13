const { Album, Track } = require('../models/models'); // Подключите свои модели
const ApiError = require('../error/ApiError');

class AlbumController {
    async getAlbumInfo(req, res, next) {
        try {
            const { id } = req.params;

            const album = await Album.findOne({
                where: { id },
                include: [
                    {
                        model: Track,
                        attributes: ['id', 'name', 'duration'],
                    },
                ],
            });

            if (!album) {
                return next(ApiError.notFound('Альбом не найден'));
            }

            return res.json(album);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAlbumsList(req, res, next) {
        try {
            const albums = await Album.findAll({
                attributes: ['id', 'name', 'duration'],
            });

            return res.json(albums);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new AlbumController();
