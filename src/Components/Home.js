import React from "react";
import '../design-files/Home.css';
import { useHistory } from "react-router-dom";


const Home = () => {

    const history = useHistory();
    const routeToPizzaForm = () => {
        history.push('/pizza')
    }
    return(   
      <div className="heroImage">
        <h2>Your favorite food, delivered while coding</h2>
        <button onClick={routeToPizzaForm} id="order-pizza">Pizza?</button>
      </div>

    )
}



export default Home;