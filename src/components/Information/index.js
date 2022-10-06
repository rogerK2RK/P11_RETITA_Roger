import styles from "./style.module.css"
import React, { useState } from "react"
import picto from "../../assets/Vector.svg"

function DropInformation({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropDescpt = () => {
    setIsOpen(!isOpen)
  }
  console.log(children)

  return (
    <div className={styles["box-drop"]}>
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

export default DropInformation
