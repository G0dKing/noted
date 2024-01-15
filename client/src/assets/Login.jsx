// lLogin.jsx

import React from 'react';
import '../css/Login.css';
import BtnClose from './BtnClose';

const Login = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    return (
        <div className='modal-backdrop'>
            <div className='modal'>
                {children}
                <BtnClose onClick={onClose} />
            </div>
        </div>
    );
};

export default Login;