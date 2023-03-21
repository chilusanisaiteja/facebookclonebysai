import React from 'react'

export default function Register() {
  return (
      <div className="login">
      <div className="loginWrapher">
        <div className="loginLeft">
          <h3 className="loginLogo">
            Social Media
          </h3>
          <span className="loginDesc">
            connect with friends and  around you on social media
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <input className="loginInput" placeholder="Email"/>
          <input className="loginInput" placeholder="Password"/>
          <input className="loginInput" placeholder="Password again"/>
          <button className="loginButton" >Sign Up</button>
          <button className="loginRegisterButton">
            Log into Account
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
