import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Common/Header.js';
import Footer from '../Common/Footer.js';
import './NotFound.scss';
import image from  './404.png';

function NotFound() {
  return (
    <div>
      <Header />
      <div className="error-page">
      <img className="error-image" src={image} alt="erreur 404"/>
      <p className="texte-error">Oups! La page que vous demandez n&apos;existe pas</p>
      <Link to="/" className="link-error">Retourner sur la page d&apos;accueil</Link>
     </div>
    <Footer />
    </div>
  );
}

export default NotFound;

