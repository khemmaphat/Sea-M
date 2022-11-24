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
    const myaudio = document.getElementById("myaudio");
    myaudio.volume = 0.05;
  }, []);

  return (
    <div className="font-face-ds">
      <div className="fixed left-5 top-5">
        <div className="flex space-x-4">
          <img className="flex-none w-72 h-36" src={logoName}/>
          <button onClick={() => setShowModal2(true)}>
            <img className="hover:scale-110 flex-auto h-[5.5rem]" src={MusicButton}/>
          </button>
        </div>
      </div>
      <div className="fixed left-5 bottom-5">
        <div className="flex space-x-4">
            <button onClick={() => setShowModal(true)}>
              <img className="hover:scale-110 flex-none w-40 h-20" src={AboutUs}/>
            </button>
          <a href='https://github.com/khemmaphat/Sea-M.git' target="_blank">
            <button><img className="hover:scale-110 flex-auto w-12 h-12 mt-6" src={Github}/></button>
          </a>
        </div>
        <div>
          <button onClick={logout}>
            <img className="hover:scale-110 fixed right-5 top-5 w-12 h-12 " src={Logout} id="logout-button"/>
          </button>
        </div>
      </div>
      <Modal isVisible={showModal}  onClose={() => setShowModal(false)}>
        <div className="z-30 flex flex-col m-2">
          <img className="w-36 m-auto" src={CatAbout} />
          <div className="m-auto text-2xl font-bold">We are CPE 34 student</div>
          <div className="text-base tracking-wide"><p>
          This website is part of the CPE327 course. It is a music website
          that makes it more accessible for the visually impaired.<br/><br/>
          </p></div>
          <div>
            <h5 className="font-bold">Members</h5>
            <div className="ml-4">
              <p>1. Khemmaphat 1008</p>
              <p>2. Natad 1xxx</p>
              <p>3. Tayuth 1027</p>
              <p>4. Thanaphat 1xxx</p>
              <p>5. Thanwa 1xxx</p>
            </div>
          </div>
        </div>
      </Modal>
      <Modal isVisible={showModal2}  onClose={() => setShowModal2(false)}>
        <AudioPlayer />
      </Modal>
      {/* audio player  */}
      <audio id="myaudio" autoPlay loop >
        <source src={wave} />
      </audio>
    </div>
  )
}