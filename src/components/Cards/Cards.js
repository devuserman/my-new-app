
import React from 'react';
import './Cards.scss';
import data from '../data.json';
import { Link } from 'react-router-dom';



export default function Cards() {
  return (
    <section className="cards-logements">
      <div className="container">
        {data.map((logement) => (
          <Link className="accommodation-item" key={logement.id} to={`/logement/${logement.id}`}>
            <img className="accommodation-image" src={logement.cover} alt={logement.title} />
            <h2 className="accommodation-title">{logement.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}

