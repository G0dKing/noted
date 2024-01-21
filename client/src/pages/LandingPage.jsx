// LandingPage.jsx

import { useState } from 'react'
import PropTypes from 'prop-types'
import logo from '../assets/logo.png'
import bgVideo from '../assets/bg.mp4'
import BtnMain from '../components/BtnMain'
import Login from '../components/Login'
import Copyright from '../components/Copyright'
import '../css/LandingPage.css'
import '../css/fonts.css'

const LandingPage = ({ parentCallback }) => {
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
          <img src={logo} className='logo' alt='noted' />

          <div className='btn-container'>
            <BtnMain onClick={toggleModal} />
            <Login
              isVisible={isModalVisible}
              toggleModal={toggleModal}
              parentCallback={parentCallback}
            />
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

LandingPage.propTypes = {
  parentCallback: PropTypes.func.isRequired
}

export default LandingPage
