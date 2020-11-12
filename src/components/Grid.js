import React from 'react';
import './Grid.css';

function Grid () {
    return (
        <div className="grid">
            <div className="grid__container">
                <span className="grid__line"></span>
                <span className="grid__line"></span>
                <span className="grid__line"></span>
                <span className="grid__line"></span>
                <span className="grid__line"></span>
            </div>
        </div>
    )
} 

export default Grid;