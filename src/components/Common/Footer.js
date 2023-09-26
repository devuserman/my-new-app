import React from 'react';
import logo from './LOGO.png';
import './footer.scss';


function Footer() {
  return (
  
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="LOGO" className="footer-logo" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
   
  );
}

export default Footer;

