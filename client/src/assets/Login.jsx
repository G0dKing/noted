import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnClose from './BtnClose';
import google from './google.svg';
import fb from './fb.svg';
import '../css/Login.css';

const Login = ({ isVisible, toggleModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
     navigate('/dashboard');
  };

  if (!isVisible) return null;

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        <BtnClose onClick={toggleModal} />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className='text-username'>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='text-password'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn-submit'>
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
  );
};

Login.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Login;
