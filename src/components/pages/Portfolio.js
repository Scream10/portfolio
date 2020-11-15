import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'

function Portfolio () {

    return (
        <>
            <div className="container-home">
                <div id="nd">
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
                            <Link to='{`${url}/rendering`}'>
                                <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Projet Ombeline Durey"/>
                            </Link>
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
                            <a href="/"><img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Projet AC Studio"/></a>
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
                            <a href="/"><img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Projet CoachMe"/></a>
                        </div>
                        <div className="portfolio__title">
                            <h3>CoachMe</h3>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;
