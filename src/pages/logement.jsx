import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

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
    // let logement = logements[0]
    let selectedLogement = logements.find((logement) => logement.id === id );
    // for (const logement of logements) {
    //     if(logement.id === id ){
    //         console.log(logement.pictures)
    //         selectedLogement = logement;
    //     }
    // }

    return selectedLogement === undefined ? null : (
        <div>
            <img src={ selectedLogement.cover } alt={ selectedLogement.title }/>
            <div>
                <p>{selectedLogement.title}</p>
                 <p>{selectedLogement.location}</p>
                 {/* <div>
                    {
                        for (const tag of logement.tags) {
                            return(
                                <p>{tag}</p>
                            )
                        }
                    }
                 </div> */}
                 <p>{selectedLogement.tags}</p>
            </div>
        </div>
    )

    // return(
    //     <div>
    //         {
    //              logements.map(
    //                 logement => {if(logement.id === id ){
    //                 return (
    //                     <div key={ logement.id }>
    //                         <img src={ logement.cover } alt={ logement.title }/>
    //                         <div>
    //                             <p>{logement.title}</p>
    //                              <p>{logement.location}</p>
    //                              {/* <div>
    //                                 {
    //                                     for (const tag of logement.tags) {
    //                                         return(
    //                                             <p>{tag}</p>
    //                                         )
    //                                     }
    //                                 }
    //                              </div> */}
    //                              <p>{logement.tags}</p>
    //                         </div>
    //                     </div>
    //                 )
    //             } })
    //         }
    //         {/* {logement && <img src={ logement.cover } className='cards-img' alt={ logement.title }/>} */}
    //     </div>
    // )
}

export default FicheLogement ;
