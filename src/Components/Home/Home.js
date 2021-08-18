import React from 'react'
import {SliderData} from './SliderData';
import Slider from './Slider';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider slides={SliderData} />

            <Footer />
        </div>
    )
}

export default Home
