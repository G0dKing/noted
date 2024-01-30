// pages/LandingPage.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import bgVideo from '../assets/bg.mp4'
import ModalWrapper from '../components/ModalWrapper'
import Login from '../components/Login'
import Register from '../components/Register'
import BtnMain from '../components/BtnMain'
import Copyright from '../components/Copyright'
import '../css/LandingPage.css'
import '../css/fonts.css'

const LandingPage = () => {
  const navigate = useNavigate
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState('login')

  const openModal = () => setIsModalVisible(true)
  const closeModal = () => setIsModalVisible(false)
  const switchToRegister = () => setModalContent('register')
  const switchToLogin = () => setModalContent('login')

  return (
    <div className='container'>
      <video autoPlay muted loop className='bgVid'>
        <source src={bgVideo} type='video/mp4' />
      </video>

      <header className='header'>
        <div className='hero'>
          <img src={logo} className='logo' alt='noted' />
          <div className='btn-container'>
            <BtnMain text='' onClick={openModal} />
          </div>
        </div>
      </header>

      <ModalWrapper
        className='model-backdrop'
        isVisible={isModalVisible}
        toggleModal={closeModal}
      >
        {modalContent === 'login' ? (
          <Login
            navigate={navigate}
            switchToRegister={switchToRegister}
            closeModal={closeModal}
          />
        ) : (
          <Register
            navigate={navigate}
            switchToLogin={switchToLogin}
            closeModal={closeModal}
          />
        )}
      </ModalWrapper>

      <Copyright />
    </div>
  )
}

export default LandingPage
