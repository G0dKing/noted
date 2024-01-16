// BtnMain.jsx

import React, { useState, useEffect } from 'react';
import '../css/BtnMain.css';


const BtnMain = ({ onClick }) => {
    const [label, setLabel] = useState(window.innerWidth < 600 ? 'Tap to Explore' : 'Click to Explore');

    useEffect(() => {
        const handleResize = () => {
            setLabel(window.innerWidth < 600 ? 'Tap to Explore' : 'Click to Explore');
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function debounce(fn, ms) {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, arguments);
            }, ms);
        };
    }

    return (
        <button className="btn-hero" onClick={onClick}>
            {label}
        </button>
    );
};

export default BtnMain;
