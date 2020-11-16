import React from 'react';
import '../../App.css';

function APropos () {
    return (
        <>
            <div className="container-home">
                <div id="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="header-top">
                    <h1>À Propos</h1>
                </div>
            </div>
            <div className="apropos">
                <img src={process.env.PUBLIC_URL + "img/test.jpg"} alt="Projet Ombeline Durey"/>
                <div className="container-text">
                    <h3>Nicolas Diot</h3>
                    <h4>Développeur front-end</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>                
                </div>
            </div>
            <div className="header-top">
                <h2>Méthode de travail</h2>
            </div>
            <section className="working-method">
                <div className="working-method__box">
                    <div className="working-method__title">
                        <h3>Échange</h3>
                        <i class="fas fa-user-friends fa-2x"></i>
                    </div>
                    <div className="working-method__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="working-method__number">01</p>
                    </div>
                </div>
                <div className="working-method__box">
                    <div className="working-method__title">
                        <h3>Devis et cahier des charges</h3>
                        <i class="far fa-file fa-2x"></i>
                    </div>
                    <div className="working-method__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="working-method__number">02</p>
                    </div>
                </div>
                <div className="working-method__box">
                    <div className="working-method__title">
                        <h3>Maquettes UI/UX</h3>
                        <i class="fas fa-pencil-ruler fa-2x"></i>
                    </div>
                    <div className="working-method__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="working-method__number">03</p>
                    </div>
                </div>
                <div className="working-method__box">
                    <div className="working-method__title">
                        <h3>Développement</h3>
                        <i class="fas fa-code fa-2x"></i>
                    </div>
                    <div className="working-method__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="working-method__number">04</p>
                    </div>
                </div>
                <div className="working-method__box">
                    <div className="working-method__title">
                        <h3>Maintenance</h3>
                        <i class="fas fa-cogs fa-2x"></i>
                    </div>
                    <div className="working-method__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="working-method__number">05</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default APropos;
