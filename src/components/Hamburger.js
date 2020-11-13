import React, { useState } from 'react';
import './Hamburger.css';

function Hamburger () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <a href="/" className="hamburger" onClick={handleClick}>
            {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
            <div className="line l-1"></div>
            <div className="line l-2"></div>
        </a>
    )
} 

export default Hamburger;