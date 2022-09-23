import React, { useState}  from "react"
import styles from './styles.module.css';
import next from '../../assets/next.svg'
import prev from '../../assets/prev.svg'



function Slide({imgList}) {
    const [activeIdx, setActiveIdx] = useState(0)
    return <div className={styles["box-slide"]}>
        <img className={styles["image-logement"]} src={imgList[activeIdx]} alt="test" />
        <img onClick={() => setActiveIdx(activeIdx + 1)} className={styles["bt-next"]}  src={next} alt="button next" />
        <img onClick={() => setActiveIdx(activeIdx - 1)} className={styles["bt-prev"]} src={prev} alt="button prev" />
        <p>{activeIdx+1}/{imgList.length}</p>
    </div>
}

export default Slide ;
