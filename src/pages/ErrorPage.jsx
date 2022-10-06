import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

function ErrorPage() {
    return(
        <div className="boxeErrorPage">
            <h2 className="errorNumber">404</h2>
            <p className="errorMessage">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to={"/"} className="link-to-home">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default ErrorPage ;
