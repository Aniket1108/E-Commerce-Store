import React from 'react'
import "./login.scss"
const Login = () => {
    return (
        <div className="Login">

            <div class="left">
                <h3>MotoSports</h3>
                <div class="box">
                    <input type="text" class="text" placeholder=" " />
                    <span class="placeholder">Name</span>
                </div>

                <div class="box">
                    <input type="text" class="text" placeholder=" " />
                    <span class="placeholder">E-Mail</span>
                </div>
                <button className="login">Login</button>
                <p>Forgot Password?</p>
            </div>

            <div className="right">
                <h3 className="title">Welcome Back Friend</h3>
                
            </div>

        </div >
    )
}

export default Login
