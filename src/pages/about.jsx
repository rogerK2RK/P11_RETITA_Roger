import React from "react";
import './styles.css';
import pict from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash\ 2.png';

function AboutPage(props) {
    console.log(props);
    return(
        <div className="section-about">
            <img className="img-sect" src={pict} alt="forêt" />
        </div>
    )
}

export default AboutPage ;