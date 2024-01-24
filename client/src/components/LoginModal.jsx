// LoginModal.jsx

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BtnClose from './BthClose'

const LoginModal = (
  toggleModal,
  setUsername,
  setPassword,
  isLoading,
  onSubmit
) = {

    if(!isVisible) return null;

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
        // Social Media Login
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

LoginModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  parentCallback: PropTypes.func.isRequired
}

export default LoginModal
