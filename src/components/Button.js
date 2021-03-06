import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

export const Button = ({
    to,
    children, 
    type, 
    onClick, 
    buttonStyle
}) => {
 const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
 return (
    <Link to={to} className='btn-mobile'>
        <button 
            className={`btn ${checkButtonStyle}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    </Link>
 )
};