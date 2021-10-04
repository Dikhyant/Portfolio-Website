import './App.css';

//UI components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Projects from './Pages/Projects/Projects';
import HomePage from './Pages/Home/HomePage';
import Blogs from './Pages/Blogs/Blogs';
import BlogPage from './Pages/Blogs/BlogPage';

//npm packages
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/projects" >
            <Projects />
          </Route>

          <Route exact path="/blogs" >
            <Blogs />
          </Route>

          <Route exact path="/" >
            <HomePage />
          </Route>

          <Route exact path="/blogs/:id" >
              <BlogPage />
          </Route>
          
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
