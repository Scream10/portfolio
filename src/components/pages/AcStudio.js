import React from 'react';
import '../../App.css';

function AcStudio () {
    return (
        <>
            <div className="container-home">
                <div className="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="projet-banner">
                    <img src={process.env.PUBLIC_URL + "img/ac-studio-1.png"} alt="Projet Semi Office"/>
                    <h2>Semi Office</h2>
                </div>
                <div className="projet-information">
                    <div className="projet-information__content">
                        <h3>Mon rôle</h3>
                        <p>Développeur Front-end</p>
                    </div>
                    <div className="projet-information__content">
                        <h3>Outils</h3>
                        <ul>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div className="projet-information__content">
                        <h3>Site</h3>
                        <a href="https://semi-office.herokuapp.com/" target="_blank" rel="noreferrer">
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
                    <img src={process.env.PUBLIC_URL + "img/projet-AC.png"} className="projet-concept__mac-mockup" alt="MacBook Pro Mockup"/>
                    <div className="projet-concept__text">
                        <h3>Résumé</h3>
                        <p>Semi Office est le portfolio d'Antoine Chauvin, un designer d'objets et d'espaces situé
                        à Paris. Le site a été pensé comment étant une galerie où l'on parcours les différents 
                        projets qu'Antoine réalise depuis plusieurs années.
                        </p>
                    </div>
                </div>
                <div className="projet-concept projet-concept--center">
                    <img src={process.env.PUBLIC_URL + "img/ac-studio-1.png"} className="projet-concept__img projet-concept__img--left" alt="MacBook Pro Mockup"/>
                    <img src={process.env.PUBLIC_URL + "img/ac-studio-2.png"} className="projet-concept__img projet-concept__img--right" alt="MacBook Pro Mockup"/>
                </div>
                <div className="projet-concept">
                    <div className="projet-concept__text projet-concept__text--left">
                        <h3>Version mobile</h3>
                        <p>Le site est responsive design, c'est à dire qu'il s'adapte à tous les écrans,
                        ordinateur, tablette et téléphone. Où que vous soyez, continuez à suivre les créations
                        en design d'objets et d'espaces d'Antoine sur semi-office.
                        </p>
                    </div>
                    <img src={process.env.PUBLIC_URL + "img/iphone-mockup-AC.png"} className="projet-concept__iphone-mockup" alt="MacBook Pro Mockup"/>
                </div>
                <div className="projet-change">
                    <div className="projet-change__prev">
                        <a href="/ombelinedurey">
                            <p>Projet précédent</p>
                            <div className="arrow arrow--prev"></div>
                        </a>
                    </div>
                    <div className="projet-change__next">
                        <a href="/coachme">
                            <p>Projet suivant</p>
                            <div className="arrow arrow--next"></div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcStudio;
