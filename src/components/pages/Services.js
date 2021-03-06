import React from 'react';
import '../../App.css';
import { Button } from '../Button';

function Services () {
    return (
        <>
            <div className="container-home">
                <div className="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="header-top">
                    <h1>Services</h1>
                </div>
                <div className="service">
                    <div className="service__info">
                        <h3>Site WordPress et personnalisé</h3>
                        <Button to= '/services' className='btn' buttonStyle='btn--outline'>
                            Découvrir
                        </Button>
                    </div>
                    <div className="service__img">
                        <img src={process.env.PUBLIC_URL + "img/mac-1.jpg"} alt="Test" className="grayfilter"/>
                    </div>
                    <div className="service__description">
                        <div className="service__description-content">
                            <h3>Site WordPress</h3>
                            <p>WordPress est un outil mondialement connu, 40% des sites dans le monde sont créés 
                            sous WordPress. En effet, il apporte pleins davantages, notamment une interface client
                            qui vous permet de gérer votre site internet par vous-même. Vous pourrez également 
                            choisir parmi différents templates, l'interface graphique que vous préférez pour 
                            votre futur site web.
                            </p>
                        </div>
                        <div className="service__description-content service__description-content--right">
                            <h3>Site personnalisé</h3>
                            <p>En choisissant cette option, vous bénéficiez d'une conception personnalisée ainsi
                            que d'une charte graphique sur-mesure. Je réalise une maquette UI/UX avec Figma pour
                            vous donner un premier aperçu de votre site  avant de le développer. Et je respecte
                            une structure de code favorable aux normes W3C afin d'assurer un référencement naturel
                            optimisé. Tous les sites que je crée sont responsive design, ils s'adaptent à tous
                            types d'écrans : ordinateur, tablette, mobile.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="service__info--right">
                        <h3>Site e-commerce Woocommerce</h3>
                        <Button to= '/services' className='btn' buttonStyle='btn--outline'>
                            Découvrir
                        </Button>
                    </div>
                    <div className="service__img--right">
                        <img src={process.env.PUBLIC_URL + "img/mac-2.jpg"} alt="Test" className="grayfilter"/>
                    </div>
                    <div className="service__description service__description--orange">
                        <div className="service__description-content">
                            <h3>Site e-commerce</h3>
                            <p>Woocommerce permet de créer des sites e-commerces et boutiques en ligne.
                            C'est l'une des meilleurs options pour créer et gérer efficacement votre commerce.
                            Vous pouvez également choisir parmi de nombreux plugins pour répondre à vos 
                            besoins, comme par exemple un plugin fournissant une option de vente en Click 
                            & Collect. La conception de votre boutique en ligne se fait en mobile first, car
                            aujourd'hui 40% des ventes en ligne se font sur mobile.
                            </p>
                        </div>
                        <div className="service__description-content service__description-content--right">
                            <h3>Interface client</h3>
                            <p>Une interface client vous est dédiée pour gérer votre site e-commerce 
                            simplement. Cette interface vous donne accès à la gestion de votre boutique en
                            ligne. Vous avez ainsi une vue d'ensemble sur le fonctionnement de votre boutique, 
                            la gestion du stock, et les statistiques de ventes. Bien sûr, je prends le 
                            temps de vous formez à l'utilisation du site.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="service__info service__info--black background-black">
                        <h3>Maintenance</h3>
                        <Button to= '/services' className='btn' buttonStyle='btn--outline'>
                            Découvrir
                        </Button>
                    </div>
                    <div className="service__img">
                        <img src={process.env.PUBLIC_URL + "img/mac-3.jpg"} alt="Test" className="grayfilter"/>
                    </div>
                    <div className="service__description service__description--black">
                        <div className="service__description-content">
                            <h3>Maintenance</h3>
                            <p>Je mets régulièrement à jour les différents outils et plugins qu'utilise le site afin d'assurer son
                            bon fonctionnement au fil du temps. La maintenance contient aussi un nombre d'heures accordées à 
                            de petites modifications graphiques ou de contenu. D'autre part, la correction de léger problème qui
                            pourrait apparaitre dans le futur est comprise dans le forfait de maintenance.
                            </p>
                        </div>
                        <div className="service__description-content service__description-content--right">
                            <h3>Forfait</h3>
                            <p>Deux options s'offrent à vous, un forfait annuel de 349€ (soit 29€ par mois). Ce forfait comprends
                            2h par mois allouées à l'optimisation, la correction, ou la modification légère du contenu ou du
                            graphique, apportée à votre site web si besoin. Dans le cas où vous ne prenez pas ce forfait, toutes 
                            modifications ou corrections s'élèvera à 30€/h. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-sentence">
                <h3>Un projet ? Une question ? N'hésitez pas à <a href="/contact">me contacter</a></h3>
            </div>
        </>
    )
}

export default Services;
