import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <footer className="footer">     
            <div className="footer__banner">
                <div className="footer__copyright">nicolasdiot.com | Copyright © 2020 | <a href="/mentionslegales">Mentions Légales</a></div>
                <div className="footer__info">
                    <div className="footer__contact">
                        <h4 className="header-underline">Contact</h4>
                        <p>nicolasdiot10@gmail.com</p>
                        <p>+33 (0)6 35 39 08 49</p>
                    </div>
                    <div className="footer__social">
                        <h4 className="header-underline header-underline--social">Social</h4>
                        <i class="fab fa-github-square fa-2x"></i>
                        <i class="fab fa-linkedin fa-2x"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footer;