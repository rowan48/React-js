import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import ShowArtist from "./components/ShowArtist";
import Albums from "./components/Albums";

import './App.css';

function App() {

  return (
      <Router>


        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/AboutUs">About US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contactUs">Contact US</a>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/AboutUs' element={< AboutUs />}></Route>
            <Route exact path='/ContactUs' element={< ContactUs />}></Route>
            <Route exact path='/Albums' element={< Albums />}></Route>
            <Route path="/Artist/:id" element={<ShowArtist/>} />
            <Route path='*' element={<Error/>}/>
          </Routes>
        </div>

      </Router>
  );
}

export default App;
