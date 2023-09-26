import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo_kasa from './Kasa.png';
import './header.scss';

function Header() {
  // Récupérer l'URL actuelle avec le useLocation hook
  const location = useLocation();

  return (
    <div className="header-container">
      <header className="header">
        <img src={logo_kasa} alt="Logo Kasa" className="logo_kasa" />
        <nav>
          <ul className="nav">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/a_propos" className={location.pathname === '/a_propos' ? 'active' : ''}>
                A Propos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
