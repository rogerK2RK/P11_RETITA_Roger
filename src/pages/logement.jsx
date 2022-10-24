import React from 'react';
import {useParams/*, useNavigate*/} from 'react-router-dom';
import styles from './style.module.css';
import Slide from '../components/Slide/index.js'
import Stars from '../components/Stars/index.js'
import DropInformation from '../components/Information/index.js';
import { Navigate } from 'react-router';


// import star from '../assets/Stars.svg'



// async function getLogement() {
    
//     let response = await fetch('/logements.json');
//     let dataLogement = await response.json();
    
//     return dataLogement;
   
// }

function FicheLogement({logements}) {

    // const [logements, setLogements] = useState([])
    const { id } = useParams()
    
    // const  navigate  = useNavigate()


    // useEffect(()=>{
    //     getLogement().then((data)=>{
    //     setLogements(data)
        

    //     })
    //     .catch((err) => {
    //     })
    // }, [])

    let selectedLogement = logements.find((logement) => logement.id === id );

    if (logements.length === 0) return <div>Chargement...</div> 
    if(!selectedLogement){
        console.log("on renvoie a la page d'erreur !! et ca marche aussi");
        return <Navigate to='/404'/>;
    }
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
                    <Stars etoile={Number(selectedLogement.rating)}/>
                </div>
           </div>
           <div className={styles["box-drop-all"]}>
                <DropInformation className={styles["first-bx-inf"]} title="Description">
                    <p>{selectedLogement.description}</p>
                </DropInformation>
                <DropInformation className={styles["secd-bx-inf"]} title="Equipements" >
                    <ul>{selectedLogement.equipments.map(equipement => <li key={equipement}>{equipement}</li>)}</ul>
                </DropInformation>
           </div>
        </div>
    )
}

export default FicheLogement ;


