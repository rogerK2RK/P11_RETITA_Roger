import React, {useState, useEffect} from 'react';
import './index.css';
import Home from './pages/Home';
import Logement from './pages/logement'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Banner from './components/Banner';
import Foot from './components/Foot';

async function getLogement() {
    
    let response = await fetch('/logements.json');
    let dataLogement = await response.json();
    
    return dataLogement;
   
  }

export default function App() {
    const [logements, setLogements] = useState([])

    useEffect(()=>{
      getLogement().then((data)=>{
        setLogements(data)
      })
    }, [])

    return <React.StrictMode>
    <Router>
    <Banner/>
      <Routes>
        <Route path='/' element={<Home logements={logements}/>} />
        <Route path='/logement/:id' element={<Logement/>} />
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    <Foot/>
    </Router>
    
    </React.StrictMode>
}
