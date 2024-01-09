const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
  artistName: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
  },
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
