import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Album = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/albums');
        setAlbums(response.data.albums);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Library</h1>
      <div className="grid grid-cols-2 gap-8">
        {albums.map((album) => (
          <div key={album._id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src= './public/assets/EgorKreedHolostyak.jpg'  // Замените на соответствующий URL обложки альбома
              alt={album.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold">{album.title}</h2>
            <p className="text-gray-500">{album.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
