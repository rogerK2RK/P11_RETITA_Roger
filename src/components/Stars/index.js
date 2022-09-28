import React from 'react';
import styles from './styles.modules.css';
import stars from '../../assets/Stars.svg'
import starGris from '../../assets/Star-gris.svg'

function Stars({etoile}) {
    let orange = [];
    let gris = [];

    for(let i = 0 ; i < etoile ; i++){
        orange.push(<img key={i++} src={stars} alt="icone-stars" />)
    }
    console.log(orange.length);
    if(orange.length< 5 ){
        for(let i = 0 ; i < 5-orange.length ; i++){
            gris.push(<img className={styles["strs-gris"]} key={etoile.index} src={starGris} alt="incone-stars stars gris" />)
        }
    }

    // console.log(final);
    return (
        <div>
            {orange}{gris}
        </div>
    );
    // return etoile = 5 ? ( <div>
    //     {final}
    // </div>
    //     ) : null
}

export default Stars ;