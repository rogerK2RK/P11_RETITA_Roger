import logo from '../../assets/LOGO.png';
import './Banner.css';
import { Link } from "react-router-dom";

function Banner() {
  
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo-kasa" />
        <div className='nav-header'>
          <Link to="/dgsgv" className='nav-header-fisrt txt-deco'>
            Accueil
          </Link>
          <Link className='content-header-seconde txt-deco' to="/error">
            A Propos
          </Link>
        </div>
      </header>
  );
}

export default Banner ;

