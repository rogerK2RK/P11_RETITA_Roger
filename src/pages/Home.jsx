import SectionFirst from '../components/SectionFirst'
import React from 'react';
import Gallery from '../components/Gallery/index.js'

function Home(props) {
  
  return (
    <div>
        <SectionFirst/>
        <Gallery logements={props.logements}/>
      </div>
  );
}

export default Home ;





