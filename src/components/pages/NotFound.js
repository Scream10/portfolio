import React from 'react';
import '../../App.css';

function NotFound () {
    return (
        <>
            <div className="container-home">
                <div className="not-found">
                    <h2>Erreur 404</h2>
                    <p>Page non trouvée</p>
                    <a href="/">Retour à l'acceuil</a>
                </div>
            </div>
        </>
    )
}

export default NotFound;
