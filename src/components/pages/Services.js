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
                <div className="service-box">
                    <div className="service-box__info">
                        <h3>Site Web WordPress et sur mesure</h3>
                        <Button />
                    </div>
                    <div className="service-box__img">
                        <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Test"/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services;
