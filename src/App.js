import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Examples from './templates/Game';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">React</Link>
            </li>
            <li>
              <Link to="/Game">Game</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}

export default App;

