// Login.jsx

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BtnClose from './BtnClose'
import google from '../assets/google.svg'
import fb from '../assets/fb.svg'
import '../css/Login.css'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth' // GREEN

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
      setLoading(false)
      return
    }

    try {
      const auth = getAuth() // GREEN
      await signInWithEmailAndPassword(auth, username, password) // GREEN
      // On successful login // GREEN
      localStorage.setItem('token', 'your_token_here') // GREEN - Handle token as per your requirement // GREEN
      parentCallback(true) // GREEN
      toggleModal() // GREEN
      navigate('/dashboard') // GREEN
    } catch (error) {
      console.error('Error during login:', error) // GREEN
      setError('Login failed. Please check your credentials and try again.') // GREEN
      setLoading(false) // GREEN
    } finally {
      setLoading(false) // GREEN
      setUsername('') // GREEN
      setPassword('') // GREEN
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
            <img
              src={fb}
              alt='Facebook'
              href='https://noted-12128.firebaseapp.com/__/auth/handler'
            />
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
