// Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import BtnClose from './BtnClose';
import google from './google.svg';
import fb from './fb.svg';

const Login = ({ isVisible, toggleModal }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form default behavior
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            toggleModal();
            navigate('/dashboard'); // Redirect to dashboard
        };
    };

    if (!isVisible) return null;

    return (
        <div className='modal-backdrop'>
            <div className='modal'>
                <BtnClose onClick={toggleModal} />
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='text-username'>
                        <textarea
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='text-password'>
                        <textarea
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn-submit'>Submit</button>
                </form>
                <div className='login-socials'>
                    <button className='google'><img src={google} alt='Google'></img></button>
                    <button className='fb'><img src={fb} alt='Facebook'></img></button>
                </div>
                <div className='modal-footer'>
                    <p>No Account? <a href='/register'>Register</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
