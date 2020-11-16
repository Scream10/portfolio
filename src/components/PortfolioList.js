import React from 'react';
import './PortfolioList.css';
import Button from './Button';

function PortfolioList () {
    return (
        <div className="portfolio">
            <div className="portfolio__project portfolio__project--left">
                <div className="portfolio__number">
                    <p>01</p>
                </div>
                <div className="portfolio__img portfolio__img--left">
                    <a href="/ombelinedurey">
                        <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Projet Ombeline Durey"/ >
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
            <Button />
        </div>
    )
} 

export default PortfolioList;