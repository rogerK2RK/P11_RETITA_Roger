import styles from "./style.module.css"
import React, { useState } from "react"
import picto from "../../assets/Vector.svg"

function DropDescription({ children }) {
  // const contentDescpt = document.querySelector('.box-content-col');
  // document.getElementById("myDIV").style.display = "none";
  const [isOpen, setIsOpen] = useState(false)
  const dropDescpt = () => {
    // document.querySelector('.box-content-col').style.display = "block";
    setIsOpen(!isOpen)
    // contentDescpt.style.display = "block";
    console.log("Hello word !")
  }

  return (
    <div>
      <button onClick={dropDescpt} className={styles["box-titre-col"]}>
        <h3 className={styles["titre-col"]}>Description</h3>
        <img className={styles["icone-dropdown"]} src={picto} alt="icone" />
      </button>
      <div
        className={styles["box-content-col"]}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  )
}

export default DropDescription
