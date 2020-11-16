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
                    <form className="contact-form">
                        <input type="text" name="full-name" placeholder="Nom, Prénom"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <textarea name="message" placeholder="Votre message"></textarea>
                        <input type="submit" value="Envoyer" />
                    </form>
                    <div className="contact-text">
                        <p>Vous avez une question ? Un projet ? Ou bien même une demande de devis ?</p>
                        <p>N’hésitez pas à me contacter, je vous répondrais sous 24h.</p>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-info__content">
                        <p>Email</p>
                        <h4>nicolasdiot10@gmail.com</h4>
                    </div>
                    <div className="contact-info__content">
                        <p>Téléphone</p>
                        <h4>+33 (0)6 35 39 08 49</h4>
                    </div>
                    <div className="contact-info__content">
                        <p>Réseaux</p>
                        <i class="fab fa-linkedin fa-2x"></i>
                        <i class="fab fa-linkedin fa-2x"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
