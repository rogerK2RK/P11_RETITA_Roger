import React from 'react';
import styles from './styles.modules.css';
import stars from '../../assets/Stars.svg'
import starGris from '../../assets/Star-gris.svg'

function Stars({etoile}) {
    let orange = [];
    let gris = [];

    // etoile orange
    for(let i = 0 ; i < etoile ; i++){
        orange.push(<img key={i++} src={stars} alt="icone-stars" />)
    }
    
    //étoile gris
    if(orange.length< 5 ){
        for(let i = 0 ; i < 5-orange.length ; i++){
            gris.push(<img key={i++} className={styles["strs-gris"]} src={starGris} alt="incone-stars stars gris" />)
        }
    }

    return (
        <div>
            {orange}{gris}
        </div>
    );
}

export default Stars ;