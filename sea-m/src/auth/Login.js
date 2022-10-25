import React from 'react'
import { loginEndpoint } from '../contents/spotify'
// import './Login.css';

export default function login() {
  return (
    <div class="font-face-ds grid grid-cols-4">
      <div class="col-start-2 col-end-4">
          <div class="text-4xl text-center">
          <h1>You are the middle in the sea</h1>
          </div>
            <img class="scale-75 mx-auto" src="https://cdn.discordapp.com/attachments/1032286364315680818/1032286398159523870/unknown.png"/>
          <div class="text-2xl">
            <h3>Login to sail to nearby island</h3>
          </div>
          <div class="text-lg ml-2 text-gray-500">
            <p>This website is part of the CPE327 Software Engineering Project.</p>
          </div>
           
          
        <a href={loginEndpoint}><div className="login-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 mt-2 rounded-full inline-flex items-center text-center">Log-in</div></a>
      </div>
    </div>
  )
}