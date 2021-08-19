import React from 'react'
import "./footer.scss"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"


let year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="Footer">
            <div className="data">
                <div class="content">
                    <h3>Sign up for email</h3>
                    <p>Get the latest news about upcoming products</p>
                    <div class="input-group">
                        <input type="email" class="inputsign" placeholder="Email" />
                        <span class="inputbtn">
                            <button class="btn" type="submit">Sign Up</button>
                        </span>
                    </div>
                    <div class='footer-icon'>
                        <i> <AiFillFacebook/></i>
                        <i><AiFillInstagram/></i>
                        <i><AiFillYoutube/></i>
                    </div>
                </div>
                <div class="mail">
                    <h3>Mail Us On <u>admin@motosport.in</u></h3>
                    <div>
                        <p>Locate us</p>
                        <p>Pen, Raigad</p>
                    </div>
                </div>
                <div class="customer">
                    <h3>Customer Service</h3>
                    <p>Lorem Ipsum</p>
                </div>

            </div>
            <div className="copyright">
                <p>Copyright Infoware @ {year}</p>
            </div>
        </div>
    )
}

export default Footer
