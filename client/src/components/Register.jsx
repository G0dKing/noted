import { useState } from 'react'
import PropTypes from 'prop-types'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import '../css/Login.css'
import '../css/Register.css'
import '../css/LandingPage.css'
import '../css/fonts.css'

const Register = ({ navigate, closeModal, switchToLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email || !password) {
      setError('Please enter both an email and password.')
      setLoading(false)
      return
    }

    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/dashboard')
      closeModal()
    } catch (error) {
      console.error('Error during registration:', error)
      setError(error.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        {error && <div className='error-message'>{error}</div>}
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
      <div className='btn-back-box'>
        <button className='btn-back' onClick={switchToLogin}>
          Back to Login
        </button>
      </div>
    </div>
  )
}

Register.propTypes = {
  navigate: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  switchToLogin: PropTypes.func.isRequired
}

export default Register
