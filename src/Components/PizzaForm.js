import React from "react";
import "../design-files/PizzaForm.css"

const PizzaForm = (props) => {
    console.log(props);
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        props.update(name, valueToUse)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        props.submit()
    }
    return (
        <div>
            <div id='header'>
                <h2>Build Your Own Pizza</h2>
            </div>
            <div id="heroImg" />
            <div id="pizzaBuild">
                <h3>Build Your Own Pizza</h3>
            </div>
            <form id="pizza-form" onSubmit={onSubmit}>
            <label className="choices">
                <h4>Full Name</h4>
                <p>Must use this name to pick up the pizza!</p>
            </label>
            <input type='text' placeholder="Name on Order" id="name-input" value={props.values.name} name='name' onChange={onChange} />
            <p className="errors">{props.errors.name}</p>    
                <label className="choices">
                    <h4>Choice of Size</h4>
                    <p>Required</p>
                </label>
                <select id="size-dropdown" value={props.values.size} name="size" onChange={onChange}>
                    <option value="">Select</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <p className="errors">{props.errors.size}</p>
                <label className="choices">
                    <h4>Choice of Sauce</h4>
                    <p>Required</p>
                </label>
                <div className="choiceDiv">
                <p className="errors">{props.errors.sauce}</p>
                    <div className="choiceOptions">
                        <input type='radio' className="sauce" value='originalRed' name='sauce' onChange={onChange} checked={props.values.sauce === 'originalRed'} />
                        <label className='optionsTitle'>Original Red</label>
                    </div>
                    <div className="choiceOptions">
                        <input type='radio' className="sauce" value='garlicRanch' name='sauce' onChange={onChange} checked={props.values.sauce === 'garlicRanch'} />
                        <label className='optionsTitle'>Garlic Ranch </label>
                    </div>
                    <div className="choiceOptions">
                        <input type='radio' className="sauce" value='bbqSauce' name='sauce' onChange={onChange} checked={props.values.sauce === 'bbqSauce'} />
                        <label className='optionsTitle'>BBQ Sauce</label>
                    </div>
                    <div className="choiceOptions">
                        <input type='radio' className="sauce" value='spinachAlfredo' name='sauce' onChange={onChange} checked={props.values.sauce === 'spinachAlfredo'} />
                        <label className='optionsTitle'>Spinach Alfredo</label>
                    </div>
                </div>
                
                <label className="choices">
                    <h4>Add Toppings</h4>
                    <p>Choose your toppings!</p>
                </label>
                <div className="toppingsDiv">
                    <div className="choiceDiv">
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='pepperoni' onChange={onChange} checked={props.values.pepperoni} />
                            <label className='optionsTitle'>Pepperoni</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='sausage' onChange={onChange} checked={props.values.sausage} />
                            <label className='optionsTitle'>Sausage</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='canadianBacon' onChange={onChange} checked={props.values.canadianBacon} />
                            <label className='optionsTitle'>Canadian Bacon</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='italianSausage' onChange={onChange} checked={props.values.italianSausage} />
                            <label className='optionsTitle'>Italian Sausage</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='grilledChicken' onChange={onChange} checked={props.values.grilledChicken} />
                            <label className='optionsTitle'>Grilled Chicken</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='onion' onChange={onChange} checked={props.values.onion} />
                            <label className='optionsTitle'>Onion</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='greenPepper' onChange={onChange} checked={props.values.greenPepper} />
                            <label className='optionsTitle'>Green Pepper</label>
                        </div>
                    </div>
                    <div className="choiceDiv">    
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='dicedTomatoes' onChange={onChange} checked={props.values.dicedTomatoes} />
                            <label className='optionsTitle'>Diced Tomatoes</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='blackOlives' onChange={onChange} checked={props.values.blackOlives} />
                            <label className='optionsTitle'>Black Olives</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='roastedGarlic' onChange={onChange} checked={props.values.roastedGarlic} />
                            <label className='optionsTitle'>Roasted Garlic</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='artichokeHearts' onChange={onChange} checked={props.values.artichokeHearts} />
                            <label className='optionsTitle'>Artichoke Hearts</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='threeCheese' onChange={onChange} checked={props.values.threeCheese} />
                            <label className='optionsTitle'>Three Cheese</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='pineapple' onChange={onChange} checked={props.values.pineapple} />
                            <label className='optionsTitle'>Pineapple</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" name='extraCheese' onChange={onChange} checked={props.values.extraCheese} />
                            <label className='optionsTitle'>Extra Cheese</label>
                        </div>
                    </div>
                </div>
                <label className="choices">
                    <h4>Choice of Substitute</h4>
                    <p>Choose up to 1.</p>
                </label>
                <div className="choiceDiv">
                    <div className="choiceOptions">
                        <input type='checkbox' className="sauce" name='substitute' onChange={onChange} checked={props.values.substitute} />
                        <label className='optionsTitle'>Gluten Free Crust (+ $1.00)</label>
                    </div>
                </div>
                <label className="choices">
                    <h4>Special Instructions</h4>
                    <p></p>
                </label>
                <div className="choiceDiv">
                    <div className="choiceOptions">
                        <input type='text' id="special-text" name="special" value={props.values.special} onChange={onChange} />
                    </div>
                </div>
                <div className="submitInfo">
                    <div id="pizzasOrdered">
                    <label className="optionsTitle">Number of Pizzas</label>
                    <input type="text" value={props.values.pizzasOrdered} name='pizzasOrdered' onChange={onChange} />
                    <p className="errors">{props.errors.pizzasOrdered}</p>
                    </div>
                    <button disabled={props.disabled} id='order-button'>Add to Order</button>
                    <div>
                        {props.pizza.name}
                        {props.pizza.size}
                        {props.pizza.instructions}
                        
                    </div>
                </div>
            </form>
        </div>
    )
}


export default PizzaForm;

