import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <footer className="footer background-black">     
            <div className="footer__banner">
                <div className="footer__copyright">nicolasdiot.com | Copyright © 2020 | <a href="/mentionslegales">Mentions Légales</a></div>
                <div className="footer__info">
                    <div className="footer__contact">
                        <h4 className="header-underline">Contact</h4>
                        <p><a href="mailto:nicolasdiot10@gmail.com?subject=Nicolas Diot Portfolio - Développeur Web">nicolasdiot10@gmail.com</a></p>
                        <p><a href="tel:0635390849">+33 (0)6 35 39 08 49</a></p>
                    </div>
                    <div className="footer__social">
                        <h4 className="header-underline header-underline--social">Social</h4>
                        <div className="footer__link">
                            <a href="https://github.com/Scream10" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-2x"></i></a>
                            <a href="https://www.linkedin.com/in/nicolas-diot-96b0b313a/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footer;