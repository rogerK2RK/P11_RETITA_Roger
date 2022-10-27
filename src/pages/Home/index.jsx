import React from 'react';
import './style.css';
import "./styles.modules.css"
import { Link } from "react-router-dom"

function Home(props) {
  
  return (
    <div>
      <section className="content">
        <img className='img-title' alt='couverture' src='https://i0.wp.com/dndduet.com/wp-content/uploads/2020/02/eric-muhr-WfUxLpncYwI-unsplash-scaled.jpg'/>
        <h1>
          Chez vous, partout et ailleurs
        </h1>
      </section>
      <div className="gallery">
        {props.logements.map((logement) => {
          return (
            <Link
              to={`/logement/${logement.id}`}
              className="cards"
              key={logement.id}
            >
              <img
                src={logement.cover}
                className="cards-img"
                alt={logement.title}
              />
              <div className="box"></div>
              <p className="cards-text">{logement.title}</p>
            </Link>
          )
        })}
      </div>
    </div>

  );
}

export default Home ;





