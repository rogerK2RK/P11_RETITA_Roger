import styles from "./style.module.css"
import React, { useState } from "react"
import picto from "../../assets/Vector.svg"

// const props = {
//   title: "description",
//   // children: <div>fdsfsf</div>,
// }
function DropInformation({ title, children }) {
  // const { title, children } = props
  const [isOpen, setIsOpen] = useState(false)
  const dropDescpt = () => {
    setIsOpen(!isOpen)
  }
  console.log(children)

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

// const obj = {
//   id: 35,
//   price: 499,
//   color: "blue",
//   list: [1, 3 ,7],
//   details: {
//     firstName: "pierre",
//     age: 38,
//   },
// }

// const {
//   id,
//   color: colour,
//   details: { age },
//   list:[first]
// } = obj
