import logo from '../../assets/LOGO-blanche.png';
import styles from './styles.module.css';
// import { Link } from "react-router-dom";

function Foot() {
  
  return (
      <footer className={styles["foot-section"]}>
        <img src={logo} className="App-logo" alt="logo-kasa" />
        <div className=''>
        </div>
      </footer>
  );
}

export default Foot ;

