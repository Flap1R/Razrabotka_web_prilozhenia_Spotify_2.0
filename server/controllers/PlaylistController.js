const Playlist = require("../Models/Playlist");

exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.json({ playlists, success: true, message: "Playlists found" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.createPlaylist = async (req, res) => {
  const { singers, songs, title } = req.body;
  const playlist = await Playlist.create({ singers, songs, title });

  res.json({ playlist, success: true, message: "Playlist created" });
};

exports.likeSong = async (req, res) => {
    try {
      const { song_mp3, song_title, song_artist, song_thumbnail } = req.body;
  
      // Находим плейлист по заголовку "Liked Songs"
      let playlist = await Playlist.findOne({ title: "Liked Songs" });
  
      // Если плейлист не найден, создаем новый
      if (!playlist) {
        playlist = await Playlist.create({ title: "Liked Songs", songs: [] });
      }
  
      // Добавляем новую песню в плейлист
      playlist.songs.push({ song_mp3, song_title, song_artist, song_thumbnail });
      await playlist.save();
  
      res.json({ playlist, success: true, message: "Song liked" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
