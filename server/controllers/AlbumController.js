const Album = require("../Models/Album");

exports.getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.json({ albums, success: true, message: "Albums found" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.getAlbumById = async (req, res) => {
  try {
    const albumId = req.params.albumId;
    const album = await Album.findById(albumId);

    if (!album) {
      return res.status(404).json({ success: false, message: "Album not found" });
    }

    res.json({ album, success: true, message: "Album found" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.createAlbum = async (req, res) => {
  const { title, artist, genre, releaseDate, songs } = req.body;
  try {
    const album = await Album.create({ title, artist, genre, releaseDate, songs });
    res.json({ album, success: true, message: "Album created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
