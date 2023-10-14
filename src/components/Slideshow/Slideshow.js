import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Slideshow.scss';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//définit le composant Slideshow avec props images
const Slideshow = ({ images }) => {
  console.log(images);

//permet à un composants de gérer son propre état interne pour facilite le suivi des changements au fil du temps
  const [currentSlide, setCurrentSlide] = useState(0);

//représente le nombre total d'images dans le diaporama est basée sur la longueur de l'array images
  const [totalSlide] = useState(images.length);

  //met à jour l'indice de l'image pour passer à la suivante
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlide);
    console.log(currentSlide); 
  };

  // met à jour l'indice de l'image pour passer à la précédente
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
              <p className="carousel-count">{currentSlide + 1}/{totalSlide}</p>
            </>
          )}
        </div>
        <img className="carousel-image" src={images[currentSlide]} alt="logement" />
      </div>
    </div>
  );
};

//assure que les données nécessaires sont toujours fournies
Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
