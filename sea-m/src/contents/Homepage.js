import React, { useState, useEffect } from 'react';

//import picture for homepage
import logoName from 'img/Logo-name.png'
import MusicButton from 'img/Music-Button.png'
import AboutUs from 'img/About_Us_Button.png'
import Github from 'img/GitHub-Button.png'
import Logout from 'img/Logout-button.png'
import CatAbout from 'img/Cat-About-Us.png'

//import components
import AudioPlayer from 'components/AudioPlayer';
import Modal from 'components/Modal';

import { useMultipleKeyPress,useOnKeyPress } from '../Shortcutkey';
//import background audio
import wave from 'audio/sea-wave.mp3';

export default function Homepage() {

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  {/* logout function */}
  function logout(){
    window.localStorage.removeItem("token");
    window.location.reload(false);
  }

  {/* hook for reducing audio volume */}
  useEffect (() => {
    const audio = document.getElementById("audio");
    audio.volume = 0.05;
  }, []);

  return (
    <div className="font-face-ds">
      <div className="fixed left-5 top-5">
        <div className="flex space-x-4">
          <img className="flex-none w-72 h-36" src={logoName}/>
          <button   tabIndex="1" aria-label="MusicButton"  onClick={() => setShowModal2(true)}>
            <img className="hover:scale-110 flex-auto h-[5.5rem]" src={MusicButton} id="music-box" />
          </button>
        </div>
      </div>
      <div className="fixed left-5 bottom-5">
        <div className="flex space-x-4">
            <button  tabIndex="1" aria-label="about us" onClick={() => setShowModal(true)}>
              <img className="hover:scale-110 flex-none w-40 h-20" src={AboutUs} id="about-us" />
            </button>
          <a  tabIndex="-1" href='https://github.com/khemmaphat/Sea-M.git' target="_blank" id="github">
          {useMultipleKeyPress(()=>window.open('https://github.com/khemmaphat/Sea-M.git',"_blank"),["Shift","V"])}
            <button><img  tabIndex="1" aria-label="Git-hub  button" className="hover:scale-110 flex-auto w-12 h-12 mt-6" src={Github}/></button>
          </a>
        </div>
        <div>
          <button tabIndex="1" aria-label="log out button" onClick={logout}>
            <img className="hover:scale-110 fixed right-5 top-5 w-12 h-12 " src={Logout} id="logout-button"/>
          </button>
        </div>
      </div>
      <Modal isVisible={showModal}  onClose={() => setShowModal(false)}>
        {useMultipleKeyPress(()=>setShowModal(true),["Shift","K"])}
        {useMultipleKeyPress(()=>setShowModal(false),["Shift","J"])}
        <div className="z-30 flex flex-col m-2">
          <img className="w-36 m-auto" src={CatAbout}/>
          <div className="m-auto text-2xl font-bold"tabIndex="0">We are CPE 34 student</div>
          <div className="text-base tracking-wide"><p tabIndex="0">
          This website is part of the CPE327 course. It is a music website
          that makes it more accessible for the visually impaired.<br/><br/>
          </p></div>
          <div>
              <h5 tabIndex="0"  className="font-bold">Members</h5>
            <div className="ml-4">
           <p tabIndex="0" >1. Khemmaphat 1008</p>
              <p tabIndex="0" >2. Natad 1017</p>
              <p tabIndex="0" >3. Tayuth 1027</p>
              <p tabIndex="0" >4. Thanaphat 1030</p>
              <p tabIndex="0" >5. Thanwa 1095</p>
            </div>
          </div>
        </div>
      </Modal>
      <Modal isVisible={showModal2}  onClose={() => setShowModal2(false)}>
      {useMultipleKeyPress(()=>setShowModal2(true),["Shift","O"])}
      {useMultipleKeyPress(()=>setShowModal2(false),["Shift","N"])}
        <AudioPlayer />
      </Modal>
      {/* audio player  */}
      <audio id="audio" autoPlay loop >
        <source src={wave} />
      </audio>
    <script src="Text.js" async></script>
    </div>
  )
}
