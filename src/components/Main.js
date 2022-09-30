import SectionFirst from './SectionFirst/index.js'
import React from 'react';
import Gallery from './Gallery/index.js'

function Main(props) {
  
  return (
      <div>
        <SectionFirst/>
        <Gallery logements={props.logements}/>
      </div>
  );
}

export default Main ;

