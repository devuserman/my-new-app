import React from 'react';
import Header from '../Common/Header';
import Banner from '../Banner/banner';
import Footer from '../Common/Footer';
import Cards from '../Cards/Cards';
import image_1 from '../Banner/image_1.png';


function Home() {

  return (
    <div className="home">
      <Header />
      <Banner image={image_1} largeHeight={false}  text="Chez vous, partout et ailleurs" />
      <Cards />
      <Footer />
    </div>
 );
}

export default Home;
