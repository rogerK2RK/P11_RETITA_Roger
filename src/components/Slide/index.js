import React, { useState}  from "react"
import styles from './styles.module.css';
import next from '../../assets/next.svg'
import prev from '../../assets/prev.svg'



function Slide({imgList}) {
    const [activeIdx, setActiveIdx] = useState(0)

    const goToNextPicture = () => {
        setActiveIdx((activeIdx + 1) % imgList.length)
    };

    const gotToPrevPicture = () =>{
        const nextIndex = activeIdx-1;
        if ( nextIndex < 0 ) {
            setActiveIdx(imgList.length-1);
        }else {
            setActiveIdx(nextIndex);
        }
    };

    return <div className={styles["box-slide"]}>
        <img className={styles["image-logement"]} src={imgList[activeIdx]} alt="Pictur of logements" />
        <img onClick={goToNextPicture} className={styles["bt-next"]}  src={next} alt="button next" />
        <img onClick={gotToPrevPicture} className={styles["bt-prev"]} src={prev} alt="button prev" />
        <p className={styles["index"]} >{activeIdx+1}/{imgList.length}</p>
    </div>
}

export default Slide ;
