const { Op } = require('sequelize');
const { Track, Album, Artist } = require('../models/models'); // Подключите свои модели
const ApiError = require('../error/ApiError');

class SearchController {
    async searchTracks(req, res, next) {
        try {
            const { query } = req.query;

            const tracks = await Track.findAll({
                where: {
                    name: { [Op.iLike]: `%${query}%` },
                },
            });

            return res.json(tracks);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async searchAlbums(req, res, next) {
        try {
            const { query } = req.query;

            const albums = await Album.findAll({
                where: {
                    name: { [Op.iLike]: `%${query}%` },
                },
            });

            return res.json(albums);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async searchArtists(req, res, next) {
        try {
            const { query } = req.query;

            const artists = await Artist.findAll({
                where: {
                    name: { [Op.iLike]: `%${query}%` },
                },
            });

            return res.json(artists);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new SearchController();
