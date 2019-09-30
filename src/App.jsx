import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import home from "./views/home/home";
import about from "./views/about/about";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <div className="pageMain" id="main">
            <Route exact path='/' component={home}></Route>
            <Route exact path='/home' component={home}></Route>
            <Route exact path='/about' component={about}></Route>
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;