import React, { useState, useEffect } from 'react';

//import pictures for homepage
import logoName from 'img/Logo-name.png'
import MusicButton from 'img/Music-Button.png'
import AboutUs from 'img/About_Us_Button.png'
import Github from 'img/GitHub-Button.png'
import Logout from 'img/Logout-button.png'
import CatAbout from 'img/Cat-About-Us.png'
import Maingif from 'img/Homepage.gif'

//import components
import AudioPlayer from 'components/AudioPlayer';
import Modal from 'components/Modal';
import { useMultipleKeyPress, useOnKeyPress } from 'components/Shortcutkey';

//import background audio
import wave from 'audio/sea-wave.mp3';

export default function Homepage() {

  {/* declare for show Modal variable */ }
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  {/* logout function */ }
  function logout() {
    window.localStorage.removeItem("token");
    window.location.reload(false);
  }

  {/* hook for reducing audio volume */ }
  useEffect(() => {
    const audio = document.getElementById("audio");
    audio.volume = 0.05;
  }, []);

  return (
    <div className="font-face-ds">
      <div>
        {useMultipleKeyPress(() => logout(), ["Shift", "O"])}
        <button tabIndex="1" aria-label="Log in Success! If you want to Log out Please press Shift O" onClick={logout} id="logout-button" >
          <img className="hover:scale-110 fixed right-5 top-5 w-12 h-12 " src={Logout}/>
        </button>
      </div>
      <div className="fixed left-5 bottom-5">
        <div className="flex space-x-4">
          <a tabIndex="-1" href='https://github.com/khemmaphat/Sea-M.git' target="_blank" id="github">
            {useMultipleKeyPress(() => window.open('https://github.com/khemmaphat/Sea-M.git', "_blank"), ["Shift", "G"])}
            <button tabIndex="2" aria-label="Git-hub Button Please press Shift G" id="git-button"><img className="hover:scale-110 flex-auto w-12 h-12 mt-6" src={Github} /></button>
          </a>
          <button tabIndex="3" aria-label="About us Button Please press Shift A" onClick={() => setShowModal(true)} id="ab-button">
            <img className="hover:scale-110 flex-none w-40 h-20" src={AboutUs} id="about-us" />
          </button>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {useMultipleKeyPress(() => setShowModal(true), ["Shift", "A"])}
        {useMultipleKeyPress(() => setShowModal(false), ["Shift", "C"])}
        <div className="z-40 flex flex-col m-2">
          <img className="w-36 m-auto" src={CatAbout} />
          <div className="m-auto text-2xl font-bold" tabIndex="4" id="ab1">We are CPE 34 student</div>
          <div className="text-base tracking-wide"><p tabIndex="4" id="ab2">
            This website is part of the CPE327 course. It is a music website
            that makes it more accessible for the visually impaired.<br /><br />
          </p></div>
          <div className="z-40">
            <h5 tabIndex="4" className="font-bold" id="ab3">Members</h5>
            <div className="ml-4">
              <p tabIndex="4" id="ab4">1. Khemmaphat 1008</p>
              <p tabIndex="4" id="ab5">2. Natad 1017</p>
              <p tabIndex="4" id="ab6">3. Tayuth 1027</p>
              <p tabIndex="4" id="ab7">4. Thanaphat 1030</p>
              <p tabIndex="4" id="ab8">5. Thanwa 1095</p>
            </div>
          </div>
        </div>
      </Modal>
      <div className="fixed left-5 top-5">
        <div className="flex space-x-4">
          <img className="flex-none w-72 h-36" src={logoName} />
          <button tabIndex="5" aria-label="Music Button Please press Shift M to choose playlist" onClick={() => setShowModal2(true)} id="ms">
            <img className="hover:scale-110 flex-auto h-[5.5rem]" src={MusicButton} id="music-box" />
          </button>
        </div>
      </div>
      <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
        {useMultipleKeyPress(() => setShowModal2(true), ["Shift", "M"])}
        {useMultipleKeyPress(() => setShowModal2(false), ["Shift", "C"])}
        <AudioPlayer />
      </Modal>
      {/* audio player  */}
      <audio id="audio" autoPlay loop >
        <source src={wave} />
      </audio>
      <img className="z-0 w-[48%] m-auto" src={Maingif} />
      <script src="Text.js" async></script>
    </div>
  )
}