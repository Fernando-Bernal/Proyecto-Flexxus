import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Componentes/home/Home';
import Ejercicio6 from './Componentes/ejercicio6/Ejercicio6';
import Ejercicio5 from './Componentes/ejercicio5/Ejercicio5';
import Ejercicio4 from './Componentes/ejercicio4/Ejercicio4';
import Ejercicio3 from './Componentes/ejercicio3/Ejercicio3';
import Ejercicio2 from './Componentes/ejercicio2/Ejercicio2';
import Ejercicio1 from './Componentes/ejercicio1/Ejercicio1';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/ejercicio1'} component={Ejercicio1} />
          <Route path={'/ejercicio2'} component={Ejercicio2} />
          <Route path={'/ejercicio3'} component={Ejercicio3} />
          <Route path={'/ejercicio4'} component={Ejercicio4} />
          <Route path={'/ejercicio5'} component={Ejercicio5} />
          <Route path={'/ejercicio6'} component={Ejercicio6} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
