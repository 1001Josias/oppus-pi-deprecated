import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { SignOut } from './pages/SignOut';


import './App.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/pesquisa">
          <Search/>
        </Route>
        <Route path="/registro">
          <SignOut/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;