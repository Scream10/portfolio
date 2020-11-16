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
                        <div className="portfolio__img portfolio__img--left">
                            <a href="/ombelinedurey">
                                <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Projet Ombeline Durey"/>
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
                        <div className="portfolio__img portfolio__img--left">
                            <a href="/acstudio">
                                <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Projet AC Studio"/>
                            </a>
                        </div>
                        <div className="portfolio__title">
                            <h3>AC Studio</h3>    
                        </div>    
                    </div>
                </div>
                <div className="portfolio portfolio-small">
                    <div className="portfolio__project portfolio__project--left">
                        <div className="portfolio__number">
                            <p>03</p>
                        </div>
                        <div className="portfolio__img portfolio__img--left">
                            <a href="/coachme">
                                <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Projet CoachMe"/>
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
