import React, { useState, useEffect} from "react";
import { Route, Link } from 'react-router-dom';
import './App.css';
import axios from "axios";
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";

const App = () => {
  const initialFormValues = {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    italianSausage: false,
    grilledChicken: false,
    onion: false,
    greenPepper: false,
    dicedTomatoes: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
    substitute: false,
    special: ''
  }  
  const initialFormErrors = {
    size: '',
    sauce: '',
    toppings: '',
    instructions: ''
  }
  const initialPizza = [];
  const initialDisabled = true;

  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onUpdate = (name, value) => {
    setFormValues(  {...formValues, [name]: value });
  }

  const onSubmit = () => {
    const newOrder = {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    italianSausage: false,
    grilledChicken: false,
    onion: false,
    greenPepper: false,
    dicedTomatoes: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pienapple: false,
    extraCheese: false,
    substitute: '',
    special: ''
    }
  }

  return (
    <div>
      <header>
        <h1>Bloomtech Eats</h1>
        <Link id='home' to="/">Home</Link>
      </header>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/pizza">
      <PizzaForm
      submit={onSubmit}
      update={onUpdate}
      disabled={disabled}
      errors={formErrors}
      values={formValues}

      />
    </Route>
    </div>
  );
};
export default App;
