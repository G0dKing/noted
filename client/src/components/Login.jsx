// Login.jsx

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BtnClose from './BtnClose'
import google from '../assets/google.svg'
import fb from '../assets/fb.svg'
import '../css/Login.css'

const Login = ({ isVisible, toggleModal, parentCallback }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError(errorData.message || 'Login failed. Please try again.')
        return
      }

      const data = await response.json()
      if (data.token) {
        localStorage.setItem('token', data.token)
        parentCallback(true)
        toggleModal()
        navigate('/dashboard')
      } else {
        setError('Invalid Credentials')
      }
    } catch (error) {
      console.error('Error during login:', error)
      setError('An unknown error has occurred.')
    }
  }

  if (!isVisible) return null

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        <BtnClose onClick={toggleModal} />

        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {error && <div className='error-message'>{error}</div>}

          <div className='text-username'>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className='text-password'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn-submit' onClick={handleLogin}>
            Submit
          </button>
        </form>
        <div className='login-socials'>
          <button className='google'>
            <img src={google} alt='Google' />
          </button>
          <button className='fb'>
            <img src={fb} alt='Facebook' />
          </button>
        </div>
        <div className='modal-footer'>
          <p>
            No Account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  parentCallback: PropTypes.func.isRequired
}

export default Login
