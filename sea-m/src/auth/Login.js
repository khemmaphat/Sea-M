import React from 'react'
import { loginEndpoint } from '../contents/spotify'
import './Login.css';

export default function login() {
  return (
    <div className='login-page'>
      <div>
        <h1>You are the middle in the sea</h1>
      </div>
      <img src="https://cdn.discordapp.com/attachments/1032286364315680818/1032286398159523870/unknown.png" alt="logo-spotify" className="logo" />
      <div>
        <h4>Login to sail to nearby island</h4>
        <p>This website is part of the CPE327 Software Engineering Project.</p>
      </div>
      <a href={loginEndpoint}><div className='login-btn'>Log-in</div></a>
    </div>
  )
}