import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Projects from './Pages/Projects/Projects';
import HomePage from './Pages/Home/HomePage';

import { BrowserRouter as Router , Switch , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/projects" >
            <Projects />
          </Route>
          <Route path="/" >
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
