import React from 'react';
import '../../App.css';

function MentionsLegales () {
    return (
        <>
        <div className="container-home">
            <div className="nd">
                <p>ND PORTFOLIO</p>
            </div>
            <div className="header-top">
                <h1>Mentions Légales</h1>
            </div>
            <div className="container-text container-text--long container-text--left">
                <h3>Éditeur</h3>
                <p>Nom : Nicolas Diot</p>
                <p>Téléphone : +33 (0)6 35 39 08 49</p>
                <p>Siège Social : 52 place Jean Jaurès, 10000 Troyes</p>
                <p>SIRET : 890 374 937 00013</p>
                <p>Code APE : 6201Z</p>
            </div>
            <div className="container-text container-text--long container-text--left">
                <h3>Contact</h3>
                <p>Pour toute remarque sur le fonctionnement du site, écrivez à l’administrateur du site à partir de la rubrique <br /> « contact » de ce site.</p>
            </div>
            <div className="container-text container-text--long container-text--left">
                <h3>Droits d’auteur – Copyright</h3>
                <p>L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p><br />
                <p>La reproduction de tout ou partie de ce site sur un support, quel qu’il soit, est formellement interdite sauf autorisation expresse de Nicolas Diot.</p>
            </div>
            <div className="container-text container-text--long container-text--left">
                <h3>Conditions d'utilisation</h3>
                <p>Le site met en œuvre tous les moyens dont il dispose, pour assurer une information fiable et une mise à jour fiable. Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations, et signaler toutes modifications du site qu'il jugerait utile. Le site n'est en aucun cas responsable de l'utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.</p>
            </div>
        </div>
        </>
    )
}

export default MentionsLegales;
