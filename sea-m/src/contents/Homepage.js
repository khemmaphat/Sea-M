import React from 'react';

//import picture for homepage
import logoName from 'img/Logo-name.png'
import MusicButton from 'img/Music-Button.png'
import AboutUs from 'img/About_Us_Button.png'
import Github from 'img/GitHub-Button.png'
import Logout from 'img/Logout-button.png'

//import audio player
import AudioPlayer from 'components/AudioPlayer';

export default function Homepage() {

  function logout(){
    window.localStorage.removeItem("token");
    window.location.reload(false);
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
        <div>
          <button onClick={logout}>
            <img className="fixed right-5 top-5 w-12 h-12" src={Logout}/>
          </button>
        </div>
      </div>
      <AudioPlayer />
    </div>
  )
}