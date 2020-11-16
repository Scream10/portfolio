import React from 'react';
import '../../App.css';

function CoachMe () {
    return (
        <>
            <div className="container-home">
                <div id="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="projet-banner">
                    <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Projet Ombeline Durey"/>
                    <h2>CoachMe</h2>
                </div>
                <div className="projet-information">
                    <div className="projet-information__content">
                        <h3>Mon rôle</h3>
                        <p>Développeur Front-end</p>
                    </div>
                    <div className="projet-information__content">
                        <h3>Outils</h3>
                        <ul>
                            <li>Ruby on Rails</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="projet-information__content">
                        <h3>Site</h3>
                        <a href="http://coachme.herokuapp.com/" target="_blank" rel="noreferrer">
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
                        <h3>Résumer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="projet-concept projet-concept--center">
                    <img src={process.env.PUBLIC_URL + "img/test.jpg"} className="projet-concept__img projet-concept__img--left" alt="MacBook Pro Mockup"/>
                    <img src={process.env.PUBLIC_URL + "img/test.jpg"} className="projet-concept__img projet-concept__img--right" alt="MacBook Pro Mockup"/>
                </div>
                <div className="projet-concept">
                    <div className="projet-concept__text projet-concept__text--left">
                        <h3>Version mobile</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + "img/iphone-mockup.png"} className="projet-concept__iphone-mockup" alt="MacBook Pro Mockup"/>
                </div>
                <div className="projet-change">
                    <div className="projet-change__prev">
                        <a href="/acstudio">
                            <p>Projet précédent</p>
                            <div className="arrow arrow--prev"></div>
                        </a>
                    </div>
                    <div className="projet-change__next">
                        <a href="/ombelinedurey">
                            <p>Projet suivant</p>
                            <div className="arrow arrow--next"></div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoachMe;
