const Artist = require("../Models/Artist");

exports.getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json({ artists, success: true, message: "Artists found" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.getArtistById = async (req, res) => {
  try {
    const artistId = req.params.artistId;
    const artist = await Artist.findById(artistId);

    if (!artist) {
      return res.status(404).json({ success: false, message: "Artist not found" });
    }

    res.json({ artist, success: true, message: "Artist found" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.createArtist = async (req, res) => {
  const { name, genre, albums } = req.body;
  try {
    const artist = await Artist.create({ name, genre, albums });
    res.json({ artist, success: true, message: "Artist created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
