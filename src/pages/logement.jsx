import React, {useEffect, useState} from 'react';
import {useParams/*, useNavigate*/} from 'react-router-dom';
import styles from './style.module.css';
import picto from '../assets/Vector.svg'
import Slide from '../components/Slide/index.js'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



async function getLogement() {
    
    let response = await fetch('/logements.json');
    let dataLogement = await response.json();
    
    return dataLogement;
   
}

function FicheLogement() {

    const [logements, setLogements] = useState([])
    const { id } = useParams()
    // const  navigate  = useNavigate()

    console.log(id)

    useEffect(()=>{
        getLogement().then((data)=>{
        setLogements(data)
        // si mon id existe alors

        // navigate("/404")
        })
    }, [])

    console.log(logements)
    let selectedLogement = logements.find((logement) => logement.id === id );
    
    /** La même chose  **/
    // for (const logement of logements) {
    //     if(logement.id === id ){
    //         console.log(logement.pictures)
    //         selectedLogement = logement;
    //     }
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
                    <div>
                        {
                            selectedLogement.tags.map((tag) => <p className={styles["tags"]}>{tag}</p>)
                        }
                    </div>
                </div>
                <div >
                    <div className={styles["dsp-flx"]}>
                        <p className={styles["name"]}>{selectedLogement.host.name}</p>
                        <img className={styles["portrait"]} src={selectedLogement.host.picture} alt={selectedLogement.host.name} />
                    </div>
                    <p className={styles["stars"]}>{selectedLogement.rating}</p>
                </div>
           </div>
           <div>
                <div>
                    <div className={styles["box-titre-col"]}>
                        <h3 className={styles["titre-col"]}>Description</h3>
                        <img className={styles["icone-dropdown"]} src={picto} alt="icone" />
                    </div>
                    <div className={styles["box-content-col"]}>
                        <p>{selectedLogement.description}</p>
                    </div>
                </div>
                {/* <div>
                    <div>
                        <h3 className={styles["titre-col"]}>Équipements</h3>
                    </div>
                    <div>
                        <p>{selectedLogement.equipments}</p>
                    </div>
                </div> */}
           </div>
        </div>
    )
}

export default FicheLogement ;


