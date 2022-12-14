import React from 'react'
import { loginEndpoint } from 'contents/spotify'
import{ useMultipleKeyPress } from '../components/Shortcutkey'

//import pictures for Login
import Login from 'img/Login.gif'
import Loginbutton from 'img/Login-button.png'

export default function login() {
  return (
    <div className="font-face-ds grid grid-cols-4">
      <div tabIndex="-1" className="col-start-2 col-end-4">
          <div className="text-4xl text-center">
            <div className="m-8 bg-amber-100 shadow-2xl rounded-lg border-4 border-none border-solid" >
              <button tabIndex="0" id="h1" aria-label="You are the middle in the sea Please press the TAB to next">You are the middle in the sea</button>
            </div>
            <img tabIndex="-1" className="w-96 mx-auto" alt="Boat" src={Login}/>
          <div className="bg-amber-100 shadow-2xl rounded-lg border-4 border-none border-solid">
            <div className="text-2xl">
              <h3 tabIndex="0" id="h3">Login to sail to nearby island</h3>
            </div>
            <div className="text-lg ml-2 text-gray-500">
              <p tabIndex="0" id="p">This website is part of the CPE327 Software Engineering Project.</p>
            </div>
          </div>
        {useMultipleKeyPress(()=>window.open(loginEndpoint,"_self"),["Shift","I"])}
        <a href={loginEndpoint} id="login-button" ><button tabIndex="0" aria-label="Login Button Please press Shift I"><img className="w-44" src={Loginbutton} /></button></a>
     </div>
     </div>
    </div>
  )
}