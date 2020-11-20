import React from 'react';
import '../../App.css';

function Contact () {
    return (
        <>
            <div className="container-home">
                <div className="nd">
                    <p>ND PORTFOLIO</p>
                </div>
                <div className="header-top">
                    <h1>Contact</h1>
                </div>
                <div className="contact">
                    <div className="contact-info">
                        <div className="contact-info__content">
                            <p>Email</p>
                            <h4><a href="mailto:nicolasdiot10@gmail.com?subject=Nicolas Diot Portfolio - Développeur Web">nicolasdiot10@gmail.com</a></h4>
                        </div>
                        <div className="contact-info__content">
                            <p>Téléphone</p>
                            <h4><a href="tel:0635390849">+33 (0)6 35 39 08 49</a></h4>
                        </div>
                        <div className="contact-info__content">
                            <p>Horaires</p>
                            <div>
                                <h4>lun à ven : 9h - 19h</h4>
                                <h4>samedi : 9h - 12h</h4>
                            </div>
                        </div>
                    </div>
                    <div className="contact-text">
                        <p>Vous avez une question ? Un projet ? Ou bien une demande de devis ?</p>
                        <p>N’hésitez pas à me contacter par mail, je vous répondrais sous 24h.
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Contact;
