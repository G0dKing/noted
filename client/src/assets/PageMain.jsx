// PageMain.jsx

import React from 'react';
import logo from './logo.png';
import bgVideo from './bg.mp4';
import BtnMain from './BtnMain'
import Copyright from './Copyright';
import '../css/PageMain.css';
import '../css/fonts.css';

const PageMain = () => {
  const handleClick = () => {
    console.log('Navigation!');
  };

  return (
    <div className="container">

      <video autoPlay muted loop className="bgVid">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <header className="header">
        <div className="hero">
          <img src={logo} className="logo" alt="" />

          <div className="btn-container">
            <BtnMain label="Explore"
              onClick={handleClick} />
          </div>

        </div>
      </header>
      <Copyright />
    </div>
  );
};

export default PageMain;
