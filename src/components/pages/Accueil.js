import React from 'react';
import '../../App.css';
import PortfolioList from '../PortfolioList';

function Accueil () {

    // MOUSE EFFECT
    let mouseCursor = document.querySelector(".cursor");
    let backgroundBlack = document.querySelectorAll(".background-black");
  
    backgroundBlack.forEach(bg => {
      bg.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-white");
      });
      bg.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-white");
      });
    });
    
    return (
        <>
            <div className="container-home">
                <div className="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="home-banner">
                    <div className="home-banner__img">
                        <img src={process.env.PUBLIC_URL + "img/mac-setup.jpg"} alt="Mac setup"/>
                    </div>
                    <div className="home-banner__text">
                        <h1>Ensemble développons votre site internet</h1>
                    </div>
                </div>
                <div className="w-full mb-80">
                    <p id="discover">Découvrir</p>
                    <span className="arrow"></span>
                </div>
                <div className="container-text container-text--left">
                    <h2>Esthétique</h2>
                    <p>En tant que développeur front-end, je porte un intérêt prononcé pour l'esthétique
                    et l'unviers graphique de votre site. Chaque site internet est unique, c'est pourquoi
                    vous pourrez choisir entre un template WordPress ou une charte graphique personnalisé
                    à votre image. Pour tous conseils esthétiques, je vous ferais part de mon expérience
                    en UI et UX Design. 
                    </p>
                </div>
                <div className="container-text container-text--middle">
                    <h2>Performant</h2>
                    <p>La performance d'un site est crucial, c'est pourquoi j'optimiserais son fonctionnement
                    avec des plugins comme WP Rocket si vous choisissez un site WordPress. Pour un site 
                    personnalisé, la structure du code respectera les normes W3C pour un meilleur référencement,
                    et chaque image sera compressée sans perte de qualité, pour un chargement plus rapide de
                    votre site. 
                    </p>
                </div>
                <div className="container-text container-text--left">
                    <h2>Responsive Design</h2>
                    <p>Tous les sites que je développe sont responsive design, c'est à dire qu'ils s'adaptent
                    à tous support, que ce soit sur un ordinateur, une tablette ou un téléphone.
                    </p>
                </div>        
                <div id="services-banner" className="background-black">
                    <a href="/services">
                        <h3>Découvrir les services</h3>
                        <span className="arrow arrow--white"></span>
                    </a>
                </div>
                <div id="realisation" className="container-text container-text--right">
                    <h2>Réalisations</h2>
                </div>
                <PortfolioList />
                <div className="footer-sentence">
                    <h3>Un projet ? Une question ? N'hésitez pas à <a href="/contact">me contacter</a></h3>
                </div>
            </div>
        </>
    )
}

export default Accueil;
