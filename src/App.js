import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/ProductsList";
import Cart from "./pages/Cart";
import Single from "./pages/Single";
import Errors from "./pages/Error";
import Navbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:slug" component={Single} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Errors} />
        </Switch>
      </>
    );
  }
}

export default App;
