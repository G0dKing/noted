// Login.jsx

import React from 'react';
import '../css/Login.css';
import BtnClose from './BtnClose';
import google from './google.svg';
import fb from './fb.svg';

const Login = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    return (
        <div className='modal-backdrop'>
            <div className='modal'>
                {children}
                <BtnClose onClick={onClose} />
                <h2>Login</h2>
                <div className='text-username'>
                    <textarea placeholder='Username'></textarea>
                </div>
                <div className='text-password'>
                    <textarea placeholder='Password'></textarea>
                </div>
                <button className='btn-submit'>Submit</button>
                <div className='login-socials'>
                    <button className='google'><img src={google}></img></button>
                    <button className='fb'><img src={fb}></img></button>
                </div>
                <div className='modal-footer'>
                    <p>No Account? <a href="">Register</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;