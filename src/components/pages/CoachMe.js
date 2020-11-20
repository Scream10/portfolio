import React from 'react';
import '../../App.css';

function CoachMe () {
    return (
        <>
            <div className="container-home">
                <div className="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="projet-banner">
                    <img src={process.env.PUBLIC_URL + "img/coachme-3.png"} alt="Projet Ombeline Durey"/>
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
                            <i className="fas fa-globe fa-2x"></i>
                        </a>
                    </div>
                    <div className="projet-information__content">
                        <h3>Code Source</h3>
                        <a href="https://github.com/Scream10" target="_blank" rel="noreferrer">
                            <i className="fas fa-code fa-2x"></i>
                        </a>
                    </div>  
                </div>
                <div className="projet-concept">
                    <img src={process.env.PUBLIC_URL + "img/projet-test.png"} className="projet-concept__mac-mockup" alt="MacBook Pro Mockup"/>
                    <div className="projet-concept__text">
                        <h3>Résumer</h3>
                        <p>CoachMe représente l'exercice final que nous devions créer à la fin de la formation en 
                        développement web à THP, The Hacking Project. Avec 4 autres apprentis développeurs, nous 
                        avons créé le site CoachMe sur lequel j'étais responsable de la partie front-end.
                        </p>
                    </div>
                </div>
                <div className="projet-concept projet-concept--center">
                    <img src={process.env.PUBLIC_URL + "img/coachme-1.png"} className="projet-concept__img projet-concept__img--left" alt="MacBook Pro Mockup"/>
                    <img src={process.env.PUBLIC_URL + "img/coachme-2.png"} className="projet-concept__img projet-concept__img--right" alt="MacBook Pro Mockup"/>
                </div>
                <div className="projet-concept">
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
