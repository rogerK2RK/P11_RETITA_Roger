import SectionFirst from './SectionFirst/SectionFirst'
import React from 'react';
import Gallery from './Gallery/Gallery'

function Main(props) {
  
  return (
      <div>
        <SectionFirst/>
        <Gallery logements={props.logements}/>
      </div>
  );
}

export default Main ;

