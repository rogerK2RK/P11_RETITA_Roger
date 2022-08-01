import logo from '../../assets/LOGO.png';
import './Banner.css';

function Banner() {
  
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo-kasa" />
        <div className='nav-header'>
          <a className='nav-header-fisrt txt-deco' href='#'>
            Accueil
          </a>
          <a className='content-header-seconde txt-deco' href='#'>
            A Propos
          </a>
        </div>
      </header>
  );
}

export default Banner ;

