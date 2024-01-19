// LandingPage.jsx

import { useState } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.png'
import bgVideo from './bg.mp4'
import BtnMain from './BtnMain'
import Login from './Login'
import Copyright from './Copyright'
import '../css/LandingPage.css'
import '../css/fonts.css'

const LandingPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <div className='container'>
      <video autoPlay muted loop className='bgVid'>
        <source src={bgVideo} type='video/mp4' />
      </video>
      <header className='header'>
        <div className='hero'>
          <img src={logo} className='logo' alt='Company Logo' />
          <div className='btn-container'>
            <BtnMain onClick={toggleModal} />
            <Login isVisible={isModalVisible} toggleModal={toggleModal} />
          </div>
        </div>
      </header>
      <Copyright />
    </div>
  )
}

BtnMain.propTypes = {
  onClick: PropTypes.func.isRequired
}

Login.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
}

export default LandingPage
