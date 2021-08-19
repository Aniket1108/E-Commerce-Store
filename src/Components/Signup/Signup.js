import React from 'react'
import "./signup.scss"

const Signup = () => {
    return (
        <div className="Signup">
            <div className="left">
                <h3 className="title">Hello</h3>
                <button className="btn google">Sign up with Google</button>
                <button className="btn faceook">Sign up with Facebook</button>
                
            </div>

            <div class="right">
                <h3>MotoSports</h3> 
                <div class="box">
                    <input type="text" class="text" placeholder=" " />
                    <span class="placeholder">Name</span>
                </div>

                <div class="box">
                    <input type="email" class="text" placeholder=" " />
                    <span class="placeholder">E-Mail</span>
                </div>

                <div class="box">
                    <input type="email" class="text" placeholder=" " />
                    <span class="placeholder">Repeat E-Mail</span>
                </div>

                <div class="box">
                    <input type="text" class="text" placeholder=" " />
                    <span class="placeholder">Password</span>
                </div>
                <button className="btn signup">Signup</button>
                <p>Forgot Password?</p>
            </div>


        </div >
    )
}

export default Signup
