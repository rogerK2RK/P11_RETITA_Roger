import React /*, {useEffect, useState}*/ from "react"
import "./styles.modules.css"
import { Link } from "react-router-dom"

function Gallery(props) {
  return (
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
  )
}

export default Gallery
