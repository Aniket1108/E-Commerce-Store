import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "./navbar.scss"

export const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <div className="Navbar">

            <div onClick={() => {setMobileMenu(!mobileMenu)}}
            className="togglebtn"
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <Link to="/" className="logo">MotoSports</Link>
            <div className={mobileMenu ? "list active" : "list"}>
                <ul className="left">
                    <Link to="/" className="links">Home</Link>
                    <Link to="/products" className="links product">Products</Link>
                </ul>
                <ul className="right">
                    <Link to="/login" className="links login">
                        Login
                    </Link>
                    <Link to="/signup" className="links signup">Sign Up</Link>
                </ul>
            </div>


            
        </div>
    )
}
export default Navbar;