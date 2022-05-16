import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;


// esiste la possibilità di aggiungere dello style all'interno dei tag usando
// style={{ 
//   oggetto : valore
// }}
// ricordandosi che si sta passando un oggetto javascript dentro un valore dinamico
// ecco perchè le doppie parentesi