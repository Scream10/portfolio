import React from 'react';
import '../../App.css';

function Portfolio () {

    return (
        <>
            <div className="container-home">
                <div className="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="header-top">
                    <h1>Portfolio</h1>
                </div>
                <div className="portfolio">
                    <div className="portfolio__project portfolio__project--left">
                        <div className="portfolio__number">
                            <p>01</p>
                        </div>
                        <div className="portfolio__img">
                            <a href="/ombelinedurey">
                                <img src={process.env.PUBLIC_URL + "img/ombelinedurey.jpg"} alt="Projet Ombeline Durey"/>
                                <span className="portfolio__overlay"></span>
                            </a>
                        </div>
                        <div className="portfolio__title">
                            <h3>Ombeline Durey</h3>    
                        </div>
                    </div>
                    <div className="portfolio__project portfolio__project--right">
                        <div className="portfolio__number">
                            <p>02</p>
                        </div>
                        <div className="portfolio__img">
                            <a href="/semioffice">
                                <img src={process.env.PUBLIC_URL + "img/ac-studio-1.png"} alt="Projet AC Studio"/>
                                <span className="portfolio__overlay"></span>
                            </a>
                        </div>
                        <div className="portfolio__title">
                            <h3>Semi Office</h3>    
                        </div>    
                    </div>
                </div>
                <div className="portfolio portfolio-small">
                    <div className="portfolio__project portfolio__project--left">
                        <div className="portfolio__number">
                            <p>03</p>
                        </div>
                        <div className="portfolio__img">
                            <a href="/coachme">
                                <img src={process.env.PUBLIC_URL + "img/coachme-1.png"} alt="Projet CoachMe"/>
                                <span className="portfolio__overlay"></span>
                            </a>
                        </div>
                        <div className="portfolio__title">
                            <h3>CoachMe</h3>    
                        </div>
                    </div>
                </div>
                <div className="footer-sentence">
                    <h3>Un projet ? Une question ? N'hésitez pas à <a href="/contact">me contacter</a></h3>
                </div>
            </div>
        </>
    )
}

export default Portfolio;
