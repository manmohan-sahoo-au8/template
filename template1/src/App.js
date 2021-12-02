import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbarmenu from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbarmenu />
        {/* <Router>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/about" component={About} ></Route>
          <Route exact path="/blog" component={Blog} ></Route>
          </Router> */}
        {/* <Home/> */}
        {/* <About /> */}
        <Blog />
        <Footer />
      </div>
    );
  }
}
export default App;
