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
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!username || !password) {
      setError('Please enter both username and password.')
      return
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      try {
        const responseData = await response.json()

        if (!response.ok) {
          setError(responseData.message || 'Login failed. Please try again.')
        } else {
          if (responseData.token) {
            localStorage.setItem('token', responseData.token)
            parentCallback(true)
            toggleModal()
            navigate('/dashboard')
          } else {
            setError(
              'Invalid Credentials. Please ensure you are properly entering the correct username and password.'
            )
          }
        }
      } catch (jsonParseError) {
        setError('An error occurred. Please try reloading the page.')
      }
    } catch (error) {
      console.error('Error during login:', error)
      setError(
        'A server error has occurred. Please try signing-in again in a few minutes.'
      )
    } finally {
      setLoading(false)
      setUsername('')
      setPassword('')
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
          <button
            type='submit'
            className='btn-submit'
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Submit'}
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
