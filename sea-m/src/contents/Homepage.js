import React, { useState, useEffect } from 'react';
import APIKit from './spotify';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router';

export default function Homepage() {

  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get('me/playlists').then(function (response) {
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();
  const playPlaylist = (id) => {
    navigate('/player', { state: { id: id } });
  }

  return (
    <div>
      {playlists?.map(playlist => (
        <div key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
          <img src ={playlist.images[0].url} alt="Playlist-Art" />
          <p>{playlist.name}</p>
          <p>{playlist.tracks.total} Songs</p>
          <div>
            <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </div>
        </div>
      ))}
    </div>
  )
}