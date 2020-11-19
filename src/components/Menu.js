import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu () {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <>
            <Link to="/" className="hamburger" onClick={handleClick}>
                <i className={click ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'} />
                {/* <div className="line l-1"></div>
                <div className="line l-2"></div> */}
            </Link>
            <div className={click ? 'menu-wrapper active' : 'menu-wrapper'}>
                <div className="menu">
                    <div className="menu__section">
                        <Link to="/" className="menu__info background-black" onClick={closeMenu}>
                            <h3 className="menu__title">Accueil</h3>
                        </Link>
                    </div>
                    <div className="menu__section">
                        <Link to="/services" className="menu__info background-black" onClick={closeMenu}>
                            <h3 className="menu__title">Services</h3>
                            <div className="menu__text-container">
                                <p href="/" className="menu__text">Site Web</p>
                                <p href="/" className="menu__text">Site E-commerce</p>
                                <p href="/" className="menu__text">Maintenance</p>
                            </div>
                        </Link>
                    </div>
                    <div className="menu__section">
                        <Link to="/portfolio" className="menu__info background-black" onClick={closeMenu}>
                            <h3 className="menu__title">Portfolio</h3>
                            <div className="menu__text-container">
                                <p href="/" className="menu__text">Ombeline Durey</p>
                                <p href="/" className="menu__text">AC Studio</p>
                                <p href="/" className="menu__text">CoachMe</p>
                            </div>
                        </Link>
                    </div>
                    <div className="menu__section">
                        <Link to="/apropos" className="menu__info background-black" onClick={closeMenu}>
                            <h3 className="menu__title">À propos</h3>
                        </Link>
                    </div>
                    <div className="menu__section">
                        <Link to="/contact" className="menu__info background-black" onClick={closeMenu}>
                            <h3 className="menu__title">Contact</h3>
                        </Link>
                    </div>
                    <div className="menu__section">
                        <div className="menu__info background-black">
                            {/* <a href="/" className="hamburger hamburger--closed">Contenttochange</a> */}
                            <p className="menu__menu">Menu</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Menu;