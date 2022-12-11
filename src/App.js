import React, { useState, useEffect} from "react";
import { Route, Link } from 'react-router-dom';
import './App.css';
import axios from "axios";
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import formSchema from "./validation/formSchema";
import * as yup from 'yup';

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
    special: '',
    pizzasOrdered: '1'
  }  
  const initialFormErrors = {
    size: 'Pick a size!',
    sauce: 'Pick a sauce!',
    toppings: '',
    name:'Name is required for pickup!',
    pizzasOrdered: ''
  }
  const initialPizza = [];
  const initialDisabled = true;
  

  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  useEffect(() => {
    formSchema.isValid(formValues).then(valid =>setDisabled(!valid))
  }, [formValues])

  const onSubmit = () => {
    const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    pepperoni: !!formValues.pepperoni,
    sausage: !!formValues.sausage,
    canadianBacon: !!formValues.canadianBacon,
    italianSausage: !!formValues.italianSausage,
    grilledChicken: !!formValues.grilledChicken,
    onion: !!formValues.onion,
    greenPepper: !!formValues.greenPepper,
    dicedTomatoes: !!formValues.dicedTomatoes,
    blackOlives: !!formValues.blackOlives,
    roastedGarlic: !!formValues.roastedGarlic,
    artichokeHearts: !!formValues.artichokeHearts,
    threeCheese: !!formValues.threeCheese,
    pineapple: !!formValues.pineapple,
    extraCheese: !!formValues.extraCheese,
    substitute: formValues.substitute,
    special: formValues.special,
    pizzasOrdered: formValues.pizzasOrdered   
  }
  axios.post("https://reqres.in/api/orders", newOrder)
    .then(res => {
      setPizza(res.data);
    })
    .catch(err => console.error(err))
    .finally(() => {
      setFormValues(initialFormValues)
      setFormErrors(initialFormErrors)
    })

  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: "" }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const onUpdate = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
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
