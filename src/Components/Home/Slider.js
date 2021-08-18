import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import "./slider.scss"

const ImageSlider = ({ slides }) => {
  const [current, setNextSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setNextSlide(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setNextSlide(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='arrow left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='arrow right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travle' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;