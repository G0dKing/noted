// Login.jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import '../css/Login.css'
import '../css/LandingPage.css'
import '../css/fonts.css'
import '../css/Register.css'

const Login = ({ closeModal, switchToRegister }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async e => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    if (!email || !password) {
      setError('Please enter both email and password.')
      setLoading(false)
      return
    }

    try {
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, email, password)
       setSuccess('Logged in successfully. Redirecting...')
       navigate('/dashboard')
       closeModal()     
    } catch (error) {
       console.error('Error during login:', error)
       setError(error.message)
       setLoading(false)
    } finally {
        setLoading(false)     
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <div className='error-message'>{error}</div>}
        {success && <div className='success-message'>{success}</div>}
        <div className='text-email'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
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
        <button type='submit' className='btn-submit' disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      <div className='modal-footer'>
        <p>
          Don&apos;t have an account?{' '}
          <button className='btn-register' onClick={switchToRegister}>
            Register
          </button>
        </p>
      </div>
    </div>
  )
}

Login.propTypes = {
  
  closeModal: PropTypes.func.isRequired,
  switchToRegister: PropTypes.func.isRequired
}

export default Login
