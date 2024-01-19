import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnClose from './BtnClose';

import '../css/Login.css';

const Login = ({ isVisible, toggleModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        toggleModal();
        navigate('/dashboard');
      } else {
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('Login failed. Please try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        <BtnClose onClick={toggleModal} />
        <h2>Login</h2>
        {loginError && <p className="error">{loginError}</p>}
        <form onSubmit={handleLogin}>
          {/* Form Fields */}
        </form>
        {/* Rest of the component */}
      </div>
    </div>
  );
};

Login.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Login;
