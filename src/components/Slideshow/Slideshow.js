import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Добавляем импорт PropTypes
import './Slideshow.scss';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slideshow = ({ images }) => {
  console.log(images);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [totalSlide] = useState(images.length);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlide);
    console.log(currentSlide); 
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlide) % totalSlide);
    console.log(currentSlide); 
  };

  return (
    <div className="slide-container-wrapper">
      <div className="slide-container">
        <div className="slide-navigation">
          {images.length > 1 && (
            <>
              <FontAwesomeIcon icon={faChevronLeft} className="prev custom-icon" onClick={previousSlide} />
              <FontAwesomeIcon icon={faChevronRight} className="next custom-icon" onClick={nextSlide} />
            </>
          )}
        </div>
        <img className="carousel-image" src={images[currentSlide]} alt="logement" />
      </div>
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
