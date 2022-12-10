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
        <Link to="/"><button id="home">Home</button></Link>
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
