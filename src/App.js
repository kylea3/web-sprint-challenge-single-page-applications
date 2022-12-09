import React from "react";
import './App.css';

const App = () => {
  return (
    <div>    
      <header>
        <h1>Lambda Eats</h1>
        <button id="home">Home</button>
      </header>
      <div className="heroImage">
        <h2>Your favorite food, delivered while coding</h2>
        <button className="pizzaFormBtn">Pizza?</button>
      </div>
    </div>
  );
};
export default App;
