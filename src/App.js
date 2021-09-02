import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Episode from './pages/Episode';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider basename="/tarcisio-menezes">
      <Switch>
        <Route exact path="/irmaodojorelapp" component={ Home } />
        <Route path="/irmaodojorelapp/episode" component={ Episode } />
        <Route path="/irmaodojorelapp/about" component={ About } />
        <Route path="/irmaodojorelapp/*" component={ ErrorPage } />
      </Switch>
    </Provider>
  );
}

export default App;
