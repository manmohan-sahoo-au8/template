import React, { Component } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

import Navbarmenu from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbarmenu />
        {/* <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          
        </Routes> */}
        {/* <Home /> */}
        <About />
        {/* <Blog /> */}
        <Footer />
      </div>
    );
  }
}
export default App;
