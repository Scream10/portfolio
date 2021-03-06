import React from 'react';
import './PortfolioList.css';
import { Button } from './Button';

function PortfolioList () {
    return (
        <div className="portfolio">
            <div className="portfolio__project portfolio__project--left">
                <div className="portfolio__number">
                    <p>01</p>
                </div>
                <div className="portfolio__img">
                    <a href="/ombelinedurey">
                        <img src={process.env.PUBLIC_URL + "img/ombelinedurey.jpg"} alt="Projet Ombeline Durey"/>
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
                    </a>
                </div>
                <div className="portfolio__title">
                    <h3>Semi Office</h3>    
                </div>    
            </div>
            <div id="pos-btn-portoflio">
                <Button to= '/portfolio' className='btn' buttonStyle='btn--primary'>
                    Portfolio
                </Button>
            </div>
        </div>
    )
} 

export default PortfolioList;