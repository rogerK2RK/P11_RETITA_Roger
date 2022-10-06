import logo from "../../assets/LOGO.png"
import "./Banner.css"
import React from "react"
import { Link } from "react-router-dom"

function Banner() {
  return (
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo-kasa" />
      </Link>
      <div className="nav-header">
        <Link to="/" className="nav-header-fisrt txt-deco">
          Accueil
        </Link>
        <Link to="/error" className="content-header-seconde txt-deco">
          A Propos
        </Link>
      </div>
    </header>
  )
}

export default Banner
