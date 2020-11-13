import React from 'react';
import '../../App.css';
import PortfolioList from '../PortfolioList';
import Footer from '../Footer';

function Accueil () {
    return (
        <>
            <div className="container-home">
                <div id="nd">
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
                <div className="container-text container-text__left">
                    <h2>Esthétique</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="container-text container-text__middle">
                    <h2>Performant</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="container-text container-text__left">
                    <h2>Responsive Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div id="services-banner">
                    <h3>Découvrir les services</h3>
                    <span className="arrow arrow--white"></span>
                </div>
                <div id="realisation" className="container-text container-text__right">
                    <h2>Réalisations</h2>
                </div>
                <PortfolioList />
                <Footer />
            </div>
        </>
    )
}

export default Accueil;
