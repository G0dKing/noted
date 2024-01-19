import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                toggleModal();
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Handle error appropriately
        }
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
                    <button type='submit' className='btn-submit'>Submit</button>
                </form>
                <div className='login-socials'>
                    <button className='google'><img src={google} alt='Google'></img></button>
                    <button className='fb'><img src={fb} alt='Facebook'></img></button>
                </div>
                <div className='modal-footer'>
                    <p>No Account? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
