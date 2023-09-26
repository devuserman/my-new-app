import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import data from '../dataextra.json';
import Banner from '../Banner/banner.js';
import Collapse from '../Collapse/Collapse'
import './Apropos.scss';
import image_2 from '../Banner/image_2.png';


function Apropos() {
  return (
    <>
      <Header />
      <Banner image={image_2} largeHeight={false} />
      <div className="a-propos">
        {data.map((item) => {
          return (
           <Collapse key={item.title} name={item.title} description={item.description} />
           );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Apropos;
