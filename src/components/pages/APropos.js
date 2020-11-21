import React from 'react';
import '../../App.css';

function APropos () {
    return (
        <>
            <div className="container-home">
                <div className="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="header-top">
                    <h1>À Propos</h1>
                </div>
            </div>
            <div className="apropos">
                <img src={process.env.PUBLIC_URL + "img/nicolas.jpg"} alt="Nicolas Diot"/>
                <div className="container-text">
                    <h3>Nicolas Diot</h3>
                    <h4>Développeur front-end</h4>
                    <p>Passionner par le web, j'ai suivi deux formations développeur fullstack, The Hacking 
                    Project et Le Wagon où j'ai obtenu une certification Bac +3 en développement web. Rapidement 
                    j'ai consolidé mes compétences front-end en apprenant quotidiennement de nouveaux outils tels
                    que React, Sass, BEM, GSAP, TweenMax, TimeLine, ScrollMagic, et d'autres. 
                    <br/><br/>Je serais ravi de développer de nouveaux projets, n'hésitez pas à me contacter pour me 
                    faire part de vos idées. Je travaille également en collaboration avec une graphiste qui pourra 
                    réaliser vos logos et identités visuelles.
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
                        <i className="fas fa-user-friends fa-2x"></i>
                    </div>
                    <div className="working-method__content">
                        <p>Nous nous rencontrons autour d'un café, via skype ou au téléphone, c'est vous qui 
                        choisissez ! Lors de cet échange, vous présentez vos idées, vos besoins, ainsi que vos 
                        attentes. Et de mon côté j'évalue les outils nécessaires à la bonne réalisations du 
                        projet ainsi que le temps requis pour le développer.
                        </p>
                        <p className="working-method__number">01</p>
                    </div>
                </div>
                <div className="working-method__box">
                    <div className="working-method__title">
                        <h3>Devis et cahier des charges</h3>
                        <i className="far fa-file fa-2x"></i>
                    </div>
                    <div className="working-method__content">
                        <p>Avec les informations que j'aurais récolté lors de notre échange, j'établirais un
                        devis ainsi qu'un planning découpé en un ensemble de tâches. De votre côté, vous me
                        présentrez votre cahier des charges. Je vous expliquerais mes méthodes de travail en
                        détails, ainsi que les outils que j'utilise. Puis nous établirons ensemble l'univers 
                        graphique qui vous convient le mieux.
                        </p>
                        <p className="working-method__number">02</p>
                    </div>
                </div>
                <div className="working-method__box">
                    <div className="working-method__title">
                        <h3>Maquettes UI/UX</h3>
                        <i className="fas fa-pencil-ruler fa-2x"></i>
                    </div>
                    <div className="working-method__content">
                        <p>Différentes options sont possibles: 
                        <br/>1) Votre Web Designer me transmet les maquettes du site.
                        <br/>2) Je réalise moi-même le designe les maquettes UI/UX (interface utilisateur / expérience 
                        utilisateur). 
                        <br/>3) Vous choisissez un template sur WordPress.
                        <br/>Pour information, je créer les maquettes avec les outils suivants, Figma ou Adobe XD.
                        </p>
                        <p className="working-method__number">03</p>
                    </div>
                </div>
                <div className="working-method__box">
                    <div className="working-method__title">
                        <h3>Développement</h3>
                        <i className="fas fa-code fa-2x"></i>
                    </div>
                    <div className="working-method__content">
                        <p>Démarrage du développement sous forme de sprint. J'intègre la structure du site d'après les
                        maquettes en respectant les règles du web W3C afin d'optimiser le référencement naturel, puis je 
                        développe la partie front-end. Pour les sites avec une interface client, le back-end sera géré 
                        par un CMS tels que WordPress. Tous les préstations sont réalisées en responsive design, c'est à
                        dire que le site s'adapte à toutes tailles d'écrans, ordinateur, tablette, téléphone. Enfin je
                        testerais les performances de chargement, puis je lancerais la mise en ligne de votre site internet.
                        </p>
                        <p className="working-method__number">04</p>
                    </div>
                </div>
                <div className="working-method__box">
                    <div className="working-method__title">
                        <h3>Maintenance</h3>
                        <i className="fas fa-cogs fa-2x"></i>
                    </div>
                    <div className="working-method__content">
                        <p>Après quelques mois vous pouvez avoir envie de développer de nouvelles fonctionnalités, nous
                        pouvons reprendre rendez-vous pour échanger sur vos idées. D'autre part, je mettrais régulièrement
                        à jour les différents outils qu'utilise le site, et je corrigerais le problèmes qui pourraient 
                        apparaitre dans le futur.
                        </p>
                        <p className="working-method__number">05</p>
                    </div>
                </div>
            </section>
            <div className="footer-sentence">
                <h3>Un projet ? Une question ? N'hésitez pas à <a href="/contact">me contacter</a></h3>
            </div>
        </>
    )
}

export default APropos;
