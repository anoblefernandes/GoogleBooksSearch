import home from "./pages/home";
import favorites from "./pages/favorites";
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/favorites" component={favorites} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
