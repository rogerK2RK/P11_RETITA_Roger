import React /*, {useEffect, useState}*/ from "react"
import "./styles.modules.css"
import { Link } from "react-router-dom"

// import logements from '../data/logements.json'

// async function getLogement() {

//   let response = await fetch('/logements.json');
//   let dataLogement = await response.json();

//   return dataLogement;

// }

function Gallery(props) {
  // const [logements, setLogements] = useState([])

  // useEffect(()=>{
  //   getLogement().then((data)=>{
  //     setLogements(data)
  //   })
  // }, [])

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
