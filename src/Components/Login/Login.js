import React from 'react'

const Login = () => {
    return (
        <div className="Login">
            <div className="left">
                <h3 className="title">Welcome Back</h3>
                <div>
                    <input type="email" className="name" />
                    <input type="text" className="pwd" />
                    <button className="login">Login</button>
                </div>
                <button className="Glogin">Login with Google</button>
            </div>
        </div >
    )
}

export default Login
