import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
//si importano qui le librerie per il routing, cosi che in ogni componente siano definite
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>                              {/*inglobo tutto il contenuto dentro il router*/}
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>                        {/*lo switch serve solo a definire che ogni percorso esista una volta sola*/}
            <Route exact path="/">        {/*qui si definiscono le diverse pagine con i realtivi path ed i componenti all'interno*/}
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blog/:id">       {/* questo tipo di routing rappresenta un parametro dinamico si chiama 'route parameter' */}
              <BlogDetails/>
            </Route>
            <Route path="*">               {/* questo significa tutte le route diverse da quelle esistenti*/}
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// esiste la possibilità di aggiungere dello style all'interno dei tag usando
// style={{ 
//   oggetto : valore
// }}
// ricordandosi che si sta passando un oggetto javascript dentro un valore dinamico
// ecco perchè le doppie parentesi