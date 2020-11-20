import React from 'react';
import '../../App.css';

function OmbelineDurey () {
    return (
        <>
            <div className="container-home">
                <div className="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="projet-banner">
                    <img src={process.env.PUBLIC_URL + "img/ombelinedurey.jpg"} alt="Projet Ombeline Durey"/>
                    <h2>Ombeline Durey</h2>
                </div>
                <div className="projet-information">
                    <div className="projet-information__content">
                        <h3>Mon rôle</h3>
                        <p>Développeur Back-end</p>
                        <p>Développeur Front-end</p>
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
                    <img src={process.env.PUBLIC_URL + "img/mockup-mac-ombeline.jpg"} className="projet-concept__mac-mockup" alt="MacBook Pro Mockup"/>
                    <div className="projet-concept__text">
                        <h3>Résumer</h3>
                        <p>Pour répondre aux besoins d'une cliente en digital marketing, j'ai développé
                        son site vitrine en utilisant WordPress. Vos trouverez des réponses pour développer
                        votre activité en ligne et faire parler de vous grâce à ses campagnes publicitaires. 
                        Le design est conçu avec à un template de WordPress, et la charte graphique du site 
                        a été réalisé d'après les couleurs de son logo. Celui-ci a été créer par une graphiste
                        avec qui je collabore sur certains projets.
                        </p>
                    </div>
                </div>
                <div className="projet-concept projet-concept--center">
                    <img src={process.env.PUBLIC_URL + "img/ombelinedurey.jpg"} className="projet-concept__img projet-concept__img--left" alt="MacBook Pro Mockup"/>
                    <img src={process.env.PUBLIC_URL + "img/ombelinedurey-2.png"} className="projet-concept__img projet-concept__img--right" alt="MacBook Pro Mockup"/>
                </div>
                <div className="projet-concept">
                    <div className="projet-concept__text projet-concept__text--left">
                        <h3>Version mobile</h3>
                        <p>Le site est responsive design, c'est à dire qu'il s'adapte à tous les écrans,
                        ordinateur, tablette et téléphone. Où que vous soyez, continuez à suivre les conseils
                        en digital marketing et prospecter vos futurs clients grâce au site ombelinedurey.com.
                        </p>
                    </div>
                    <img src={process.env.PUBLIC_URL + "img/iphone-mockup.png"} className="projet-concept__iphone-mockup" alt="MacBook Pro Mockup"/>
                </div>
                <div className="projet-change">
                    <div className="projet-change__prev">
                        <a href="/coachme">
                            <p>Projet précédent</p>
                            <div className="arrow arrow--prev"></div>
                        </a>
                    </div>
                    <div className="projet-change__next">
                        <a href="/acstudio">
                            <p>Projet suivant</p>
                            <div className="arrow arrow--next"></div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OmbelineDurey;
