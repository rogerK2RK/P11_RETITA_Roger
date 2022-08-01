import React, {useEffect, useState} from 'react';
import './Gallery.css';
// import logements from '../data/logements.json'

async function getLogement() {
    
  let response = await fetch('logements.json');
  let dataLogement = await response.json();
  
  return dataLogement;
 
}

function Gallery (){
  
  const [logements, setLogements] = useState([])

  useEffect(()=>{
    getLogement().then((data)=>{
      setLogements(data)
    })
  }, [])

  return (
     <div className='gallery'>
      {
        logements.map(
          logement => {
            return(
              <div className='cards' key={ logement.id }>
                <img src={ logement.cover } className='cards-img' alt={ logement.title }/>
                <div className='box'></div>
                <p className='cards-text'>
                  { logement.title}
                </p>
              </div>
            )
          })
      }
     </div>
  );
}

export default Gallery ;


