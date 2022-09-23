import Main from '../components/Main'
import React from 'react';

function Home(props) {
  
  return (
    <div className="App">
      <Main logements={props.logements}/>
    </div>
  );
}

export default Home ;





