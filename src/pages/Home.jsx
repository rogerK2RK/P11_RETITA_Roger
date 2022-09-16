import Main from '../components/Main'

function Home(props) {
  
  return (
    <div className="App">
      <Main logements={props.logements}/>
    </div>
  );
}

export default Home ;





