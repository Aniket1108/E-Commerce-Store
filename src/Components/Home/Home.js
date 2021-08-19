import React from 'react'
import { SliderData } from '../Home/SliderData';
import Slider from '../Home/Slider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Pricesort from "./Pricesort"


const Home = () => {

    

    return (
        <div className="Home">
            <Navbar />
            <Slider slides={SliderData} />
            <div className="pricesort">
                <h3 className="title">Product below 1500 Rs</h3>
                <Pricesort />
            </div>
            <Footer />
        </div>
    )
}

export default Home
