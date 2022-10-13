import React, {useEffect, useState} from 'react';
import {useParams/*, useNavigate*/} from 'react-router-dom';
import styles from './style.module.css';
import Slide from '../components/Slide/index.js'
import Stars from '../components/Stars/index.js'
import DropInformation from '../components/Information/index.js';

// import star from '../assets/Stars.svg'



async function getLogement() {
    
    let response = await fetch('/logements.json');
    let dataLogement = await response.json();
    
    return dataLogement;
   
}

function FicheLogement() {

    const [logements, setLogements] = useState([])
    const { id } = useParams()
    
    // const  navigate  = useNavigate()


    useEffect(()=>{
        getLogement().then((data)=>{
        setLogements(data)
        // si mon id existe alors

        // navigate("/404")
        })
        .catch((err) => {
           // affiche un message d'erreur 
        })
    }, [])

    let selectedLogement = logements.find((logement) => logement.id === id );


    /*DropDown*/
    // const dropDown = () =>{
    //     document.getElementsByClassName("box-content-col")
    // }

    return selectedLogement === undefined ? null : (
        <div className={styles["logement-content"]}>
            <div className={styles["box-image-logement"]}>
                <Slide  imgList={selectedLogement.pictures} alt={ selectedLogement.title } />
            </div>
           <div className={styles["box-content-logement"]}>
                <div >
                    <h2 className={styles["tytle-logement"]}>{selectedLogement.title}</h2>
                    <p className={styles["localisation"]}>{selectedLogement.location}</p>
                    <div className={styles["box-tags"]}>
                        {
                            selectedLogement.tags.map((tag) => <p key={tag.toString()} className={styles["tags"]}>{tag}</p>)
                        }
                    </div>
                </div>
                <div className={styles["box-pict-str"]}>
                    <div className={styles["dsp-flx"]}>
                        <p className={styles["name"]}>{selectedLogement.host.name}</p>
                        <img className={styles["portrait"]} src={selectedLogement.host.picture} alt={selectedLogement.host.name} />
                    </div>
                    <div id="myDiv"></div>
                
                    <Stars etoile={Number(selectedLogement.rating)}/>
                </div>
           </div>
           <div className={styles["box-drop"]}>
                <DropInformation className={styles["first-bx-inf"]} title="Description">
                    <p>{selectedLogement.description}</p>
                </DropInformation>
                <DropInformation className={styles["secd-bx-inf"]} title="Equipements" >
                    <ul>{selectedLogement.equipments}</ul>
                </DropInformation>
           </div>
        </div>
    )
}

export default FicheLogement ;


