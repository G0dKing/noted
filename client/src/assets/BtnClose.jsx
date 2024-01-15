// BtnClose.jsx

import React from 'react';
import '../css/BtnClose.css';

const BtnClose = ({ onClick }) => {
    return (
        <button className="btn-x" onClick={onClick}>
            X
        </button>
    );
};

export default BtnClose;