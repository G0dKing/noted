// LandingPage.jsx

import React, { useState } from 'react';
import logo from './logo.png';
import bgVideo from './bg.mp4';
import BtnMain from './BtnMain'
import Copyright from './Copyright';
import Login from './Login';
import '../css/LandingPage.css';
import '../css/fonts.css';

const LandingPage = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    console.log("toggleModal called");
    setIsModalVisible(!isModalVisible);

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
            <BtnMain onClick={toggleModal} />
            <Login isVisible={isModalVisible} onClose={toggleModal}>
              <p>Login Form Goes Here</p>
            </Login>
          </div>
        </div>

      </header>

      <Copyright />

    </div>
  );
};

export default LandingPage;
