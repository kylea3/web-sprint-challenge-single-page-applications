import React from "react";
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";

const App = () => {
  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <Link id='home' to="/">Home</Link>
      </header>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/pizza-form">
      <PizzaForm />
    </Route>
    </div>
  );
};
export default App;
