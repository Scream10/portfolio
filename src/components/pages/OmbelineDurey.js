import React from 'react';
import '../../App.css';

function OmbelineDurey () {
    return (
        <>
            <div className="container-home">
                <div id="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="projet-banner">
                    <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Projet Ombeline Durey"/>
                    <h2>Ombeline Durey</h2>
                </div>
                <div className="projet-information">
                    <div className="projet-information__content">
                        <h3>Mon rôle</h3>
                        <p>Développeur Back et Front</p>
                    </div>
                    <div className="projet-information__content">
                        <h3>Outils</h3>
                        <ul>
                            <li>WordPress</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div className="projet-information__content">
                        <h3>Site</h3>
                        <a href="https://www.ombelinedurey.com/" target="_blank" rel="noreferrer">
                            <i class="fas fa-globe fa-2x"></i>
                        </a>
                    </div>
                    <div className="projet-information__content">
                        <h3>Code Source</h3>
                        <a href="https://github.com/Scream10" target="_blank" rel="noreferrer">
                            <i class="fas fa-code fa-2x"></i>
                        </a>
                    </div>  
                </div>
                <div className="projet-concept">
                    <img src={process.env.PUBLIC_URL + "img/projet-test.png"} className="projet-concept__mac-mockup" alt="MacBook Pro Mockup"/>
                    <div className="projet-concept__text">
                        <h3>Concept</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="projet-concept">
                    <img src={process.env.PUBLIC_URL + "img/test.jpg"} className="projet-concept__img" alt="MacBook Pro Mockup"/>
                    <img src={process.env.PUBLIC_URL + "img/test.jpg"} className="projet-concept__img" alt="MacBook Pro Mockup"/>
                </div>
            </div>
        </>
    )
}

export default OmbelineDurey;
