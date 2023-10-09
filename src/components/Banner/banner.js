import React from 'react';
import PropTypes from 'prop-types';
import './banner.scss';

function Banner(props) {
  const { image, largeHeight, text } = props;
  return (
    <div className="image-container">
      <img src={image} alt="" className={`banner ${largeHeight ? "banner-large" : ""}`}/>
      {text && <div className="image-text">{text}</div>}
    </div>
  );
}
//PropTypes permet d'assurer la bonne réception et le bon type de données attendues par le composant, et ainsi la robustesse et la clarté du code.
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  largeHeight: PropTypes.bool.isRequired,
  text: PropTypes.string,
};

export default Banner;

