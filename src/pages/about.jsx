import React from "react";
import './styles.css';
import pict from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash\ 2.png';
import DropInformation from '../components/Information/index.js';

function AboutPage(props) {
    console.log(props);
    return(
        <div className="section-about">
            <img className="img-sect" src={pict} alt="forêt" />
            <div className="bx-drp-abt">
                <DropInformation title="Fiabilité">
                    <p>{"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}</p>
                </DropInformation>
                <DropInformation title="Respect">
                    <p>{"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}</p>
                </DropInformation>
                <DropInformation title="Service">
                    <p>{"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}</p>
                </DropInformation>
                <DropInformation title="Sécurité">
                    <p>{"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}</p>
                </DropInformation>
            </div>
        </div>
    )
}

export default AboutPage ;