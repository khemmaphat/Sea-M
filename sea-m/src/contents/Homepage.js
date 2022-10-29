import React, { useState, useEffect } from 'react';
import APIKit from './spotify';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router';


import logoName from '../img/Logo-name.png'
import MusicButton from '../img/Music-Button.png'
import AboutUs from '../img/About_Us_Button.png'
import Github from '../img/GitHub-Button.png'


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
    <div className="font-face-ds">
      <div className="fixed left-5 top-5">
        <div className="flex space-x-4">
          <img className="flex-none w-72 h-36" src={logoName}/>
          <img className="flex-auto h-[5.5rem] mt-7" src={MusicButton}/>
        </div>
      </div>
      <div className="fixed left-5 bottom-5">
        <div className="flex space-x-4">
          <img className="flex-none w-40 h-20" src={AboutUs}/>
          <img className="flex-auto w-12 h-12 mt-6" src={Github}/>
        </div>
      </div>

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