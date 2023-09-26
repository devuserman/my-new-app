import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '../data.json';
import Slideshow from '../Slideshow/Slideshow';
import Collapse from '../Collapse/Collapse';
import './LogementPage.scss';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

function LogementPage() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  const { title, location, tags, host, pictures } = logement;

  const numericRating = parseInt(logement.rating);

  const Rating = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= numericRating) {
      Rating.push(<span key={i} className="red-stars stars">&#9733;</span>);
    } else {
      Rating.push(<span key={i} className="grey-stars stars">&#9733;</span>);
    }
  }

  if (!logement) {
    return <Navigate to="/*" />;
  }

  return (
    <div className="logement-info">
      <Header />
      <Slideshow images={pictures} />

      <div className="info-header">
        <div className="host-info">
          <span className="host-info-zero">
            <h1 className="logement-title">{title}</h1>
            <p className="logement-location">{location}</p>
          </span>
          <span className="logement-tags">
            {tags.map((tag, index) => (
              <span key={index} className="logement-tag">
                {tag}
              </span>
            ))}
          </span>
        </div>
        <div className="info-container">
          <span className="hoste-info-seconde">
            <p className="host-name">{host.name}</p>
            <img className="host-image" src={host.picture} alt="Host" />
          </span>
          <span className="logement-rating">
            <p>{Rating}</p>
          </span>
        </div>
      </div>

      <div className="logement-section">
        <div className="logement-branch">
          <Collapse name={"Description"} description={logement.description} />
        </div>

        <div className="logement-branch">
          <Collapse name={"Equipements"} description={logement.equipments} />
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default LogementPage;
