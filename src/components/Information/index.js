import styles from "./style.module.css"
import React, { useState } from "react"
import picto from "../../assets/Vector.svg"

function DropInformation({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropDescpt = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles["box-drop"]}>
      <button onClick={dropDescpt} className={styles["box-titre-col"]}>
        <h3 className={styles["titre-col"]}>{title}</h3>
        <img
          className={styles["icone-dropdown"]}
          style={{
            transform: isOpen ? null : "rotate(180deg)",
            transitionTimingFunction: "ease-in-out",
          }}
          src={picto}
          alt="icone"
        />
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
