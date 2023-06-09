import "./login.css"

export default function Login() {
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
          <button className="loginButton" >Log In</button>
          <span className="loginForgot">Forgot Password?</span>
          <button className="loginRegisterButton">
            Create a New Account
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
