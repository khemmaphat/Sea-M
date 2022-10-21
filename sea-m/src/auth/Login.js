import React from 'react'
import { loginEndpoint } from '../contents/spotify'
// import './Login.css';

export default function login() {
  return (
    <div class="font-face-ds grid grid-cols-4">
      <div class="col-start-2 col-end-4">
          <div>
          <h1>You are the middle in the sea</h1>
          </div>
            <img class='scale-75' src="https://cdn.discordapp.com/attachments/1032286364315680818/1032286398159523870/unknown.png"/>
          <div>
            <h3>Login to sail to nearby island</h3>
            <p>This website is part of the CPE327 Software Engineering Project.</p>
          </div>
        <a href={loginEndpoint}><div className='login-btn'>Log-in</div></a>
      </div>
    </div>
  )
}