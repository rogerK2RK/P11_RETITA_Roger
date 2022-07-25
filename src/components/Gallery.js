import React from 'react';
import '../styles/Gallery.css';
import logements from '../data/logements.json'



function Gallery (){

  return (
     <div className='gallery'>
      {
        logements.map(
          logement => {
            return(
              <div className='cards' key={ logement.id }>
                <img src={ logement.pictures } className='cards-img'/>
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


