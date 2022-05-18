import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";


function App() {

  return (

      <Router>


          <div className="App">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/AboutUs">About Us</Link>
                </li>
                <li>
                    <Link to="/contactUs">Contact Us</Link>
                </li>
            </ul>
              <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/AboutUs' element={< AboutUs />}></Route>
                  <Route exact path='/ContactUs' element={< ContactUs />}></Route>
              </Routes>
        </div>

      </Router>
  );
}

export default App;
