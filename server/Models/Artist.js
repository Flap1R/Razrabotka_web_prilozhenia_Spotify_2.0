const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
  artistName: {
    type: String,
    required: true,
  },
  artistImage: {
    type: String,
    required: true,
  },
  artistBanner: {
    type: String,
  },
  artistAbout: {
    type: String,
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
  rank: {
    type: String,
  },
  instagramLink: {
    type: String,
  },
  facebookLink: {
    type: String,
  },
  twitterLink: {
    type: String,
  },
  wikiLink: {
    type: String,
  },
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
