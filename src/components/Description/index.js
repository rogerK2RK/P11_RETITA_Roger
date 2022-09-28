import styles from './style.module.css';
import React from 'react';
import picto from '../../assets/Vector.svg'


function DropDescription({description}) {
    // const contentDescpt = document.querySelector('.box-content-col');
    const dropDescpt = () => {
        // contentDescpt.styles
        console.log("Hello word !");
    };

    return (
        <div >
            <div onClick={dropDescpt} className={styles["box-titre-col"]}>
                        <h3 className={styles["titre-col"]}>Description</h3>
                        <img className={styles["icone-dropdown"]} src={picto} alt="icone" />
            </div>
            <div className={styles["box-content-col"]}>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default DropDescription ;
