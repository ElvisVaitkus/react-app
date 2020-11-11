import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Game from './templates/Game';
import Home from './templates/Home';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Sakums</Link>
            </li>
            <li>
              <Link to="/Game">Spele</Link>
            </li>
          </ul>
        </nav>
		
		<Switch>
			<Route exact path="/Home">
				<Home />
			</Route>
		
			<Route exact path="/Game">
				<Game />
			</Route>
		</Switch>
		
		<footer>
          <p>Elvis Vaitkus @s8_vaitku_e</p>
        </footer>

		
      </Router>
    </div>
  );
}

export default App;

