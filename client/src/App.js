import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import About from "./components/about/About";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Passwords from "./components/passwords/Passwords";
import Profile from "./components/profile/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App text-center">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/passwords" component={Passwords} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          {/* <Landing /> */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
