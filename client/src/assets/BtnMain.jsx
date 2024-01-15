// BtnMain.jsx

import React from 'react';
import '../css/BtnMain.css';


const heroButton = ({ onClick, label }) => {
    return (
        <button className="btn-hero" onClick={onClick}>
            {label}
        </button>
    );
};

export default heroButton;
