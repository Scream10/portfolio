import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Button from '../Button';

function Services () {
    return (
        <>
            <div className="container-home">
                <div id="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="header-top">
                    <h1>Services</h1>
                </div>
                <div className="service">
                    <div className="service__info">
                        <h3>Site WordPress et personnalisé</h3>
                        <Button />
                    </div>
                    <div className="service__img">
                        <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Test"/>
                    </div>
                    <div className="service__description">
                        <div className="service__description-content">
                            <h3>WordPress</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="service__description-content service__description-content--right">
                            <h3>Site personnalisé</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="service__info--right">
                        <h3>Site e-commerce Woocommerce</h3>
                    </div>
                    <div className="service__img--right">
                        <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Test"/>
                    </div>
                </div>
                <div className="service">
                    <div className="service__info service__info--black">
                        <h3>Maintenance</h3>
                    </div>
                    <div className="service__img">
                        <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Test"/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services;
