import React from 'react'
import { SliderData } from '../Home/SliderData';
import Slider from '../Home/Slider';
import Pricesort from "./Pricesort"


import { FaShippingFast } from "react-icons/fa"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { MdLocalOffer } from "react-icons/md"

const Home = () => {



    return (
        <div className="Home">
            <Slider slides={SliderData} />
            <div className="info-box">
                <div><i> <FaShippingFast /> </i><p> <span> Free Shipping </span> <br /> For orders above rs 2000. </p></div>
                <div><i>  <AiOutlineWhatsApp /></i> <p> WhatsApp Support <br/> +91 1234567890 </p></div>
                <div><i> <MdLocalOffer /> </i><p>Hot Offers <br/> 35% Discount</p></div>
            </div>
            <div className="pricesort">
                <h3 className="title">Product below 1500 Rs</h3>
                <Pricesort />
            </div>
        </div>
    )
}

export default Home
