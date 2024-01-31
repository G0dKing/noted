import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import '../css/Login.css'
import '../css/Register.css'
import '../css/LandingPage.css'
import '../css/fonts.css'

const Register = ({ closeModal, switchToLogin }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email || !password) {
      setError('Please fill out all fields.')
      setLoading(false)
      return
    }

    if (confirmPassword != password) {
      setError('Passwords do not match.')
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
          <div className='text-confirm-password'>
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn-submit' disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      <div className='modal-footer'>
        <p>
         Already have an account?{' '} Return to 
          <button className='btn-register' onClick={switchToLogin}>
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

Register.propTypes = {
  closeModal: PropTypes.func.isRequired,
  switchToLogin: PropTypes.func.isRequired
}

export default Register
