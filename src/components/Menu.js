import React from 'react';
import './Menu.css';

function Menu () {
    return (
        <div className="menu-wrapper">
            <div className="menu">
                <div className="menu__section">
                    <div className="menu__info">
                        <h3 className="menu__title">Acceuil</h3>
                    </div>
                </div>
                <div className="menu__section">
                    <div className="menu__info">
                        <h3 className="menu__title">Services</h3>
                        <div className="menu__text-container">
                            <a href="/" className="menu__text">Site Web</a>
                            <a href="/" className="menu__text">Site E-commerce</a>
                            <a href="/" className="menu__text">Maintenance</a>
                        </div>
                    </div>
                </div>
                <div className="menu__section">
                    <div className="menu__info">
                        <h3 className="menu__title">Portfolio</h3>
                        <div className="menu__text-container">
                            <a href="/" className="menu__text">Ombeline Durey</a>
                            <a href="/" className="menu__text">AC Studio</a>
                            <a href="/" className="menu__text">CoachMe</a>
                        </div>
                    </div>
                </div>
                <div className="menu__section">
                    <div className="menu__info">
                        <h3 className="menu__title">À propos</h3>
                    </div>
                </div>
                <div className="menu__section">
                    <div className="menu__info">
                        <h3 className="menu__title">Contact</h3>
                    </div>
                </div>
                <div className="menu__section">
                    <div className="menu__info">
                        <a href="/" className="hamburger hamburger--closed">Contenttochange</a>
                        <p className="menu__menu">Menu</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Menu;