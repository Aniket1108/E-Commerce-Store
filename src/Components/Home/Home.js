import React from 'react'
import { SliderData } from '../Home/SliderData';
import Slider from '../Home/Slider';
import Pricesort from "./Pricesort"


const Home = () => {

    

    return (
        <div className="Home">
            <Slider slides={SliderData} />
            <div className="pricesort">
                <h3 className="title">Product below 1500 Rs</h3>
                <Pricesort />
            </div>
        </div>
    )
}

export default Home
