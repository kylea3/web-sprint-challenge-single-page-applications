import React from "react";
import "../design-files/PizzaForm.css"

const PizzaForm = (props) => {
    const onChange = evt => {

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
            <form id="pizza-form">
                <label className="choices">
                    <h4>Choice of Size</h4>
                    <p>Required</p>
                </label>
                <select id="size-dropdown" value='props.values.size' name="size" onChange={onChange}>
                    <option value="">Select</option>
                    <option value="small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <label className="choices">
                    <h4>Choice of Sauce</h4>
                    <p>Required</p>
                </label>
                <div className="choiceDiv">
                    <div className="choiceOptions">
                        <input type='radio' className="sauce" value='originalRed' name='originalRed' onChange={onChange} />
                        <label className='optionsTitle'>Original Red</label>
                    </div>
                    <div className="choiceOptions">
                        <input type='radio' className="sauce" value='garlicRanch' name='garlicRanch' onChange={onChange} />
                        <label className='optionsTitle'>Garlic Ranch</label>
                    </div>
                    <div className="choiceOptions">
                        <input type='radio' className="sauce" value='bbqsauce' name='bbqsauce' onChange={onChange} />
                        <label className='optionsTitle'>BBQ Sauce</label>
                    </div>
                    <div className="choiceOptions">
                        <input type='radio' className="sauce" value='spinachAlfredo' name='spinachAlfredo' onChange={onChange} />
                        <label className='optionsTitle'>Spinach Alfredo</label>
                    </div>
                </div>
                <label className="choices">
                    <h4>Add Toppings</h4>
                    <p>Choose up to 10.</p>
                </label>
                <div className="toppingsDiv">
                    <div className="choiceDiv">
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='pepperoni' name='pepperoni' onChange={onChange} />
                            <label className='optionsTitle'>Pepperoni</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='sausage' name='sausage' onChange={onChange} />
                            <label className='optionsTitle'>Sausage</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='canadianBacon' name='canadianBacon' onChange={onChange} />
                            <label className='optionsTitle'>Canadian Bacon</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='ItalianSausage' name='ItalianSausage' onChange={onChange} />
                            <label className='optionsTitle'>Italian Sausage</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='grilledChicken' name='grilledChicken' onChange={onChange} />
                            <label className='optionsTitle'>Grilled Chicken</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='onion' name='onion' onChange={onChange} />
                            <label className='optionsTitle'>Onion</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='greenPepper' name='greenPepper' onChange={onChange} />
                            <label className='optionsTitle'>Green Pepper</label>
                        </div>
                    </div>
                    <div className="choiceDiv">    
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='dicedTomatoes' name='dicedTomatoes' onChange={onChange} />
                            <label className='optionsTitle'>Diced Tomatoes</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='blackOlives' name='blackOlives' onChange={onChange} />
                            <label className='optionsTitle'>Black Olives</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='roastedGarlic' name='roastedGarlic' onChange={onChange} />
                            <label className='optionsTitle'>Roasted Garlic</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='artichokeHearts' name='artichokeHearts' onChange={onChange} />
                            <label className='optionsTitle'>Artichoke Hearts</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='threeCheese' name='threeCheese' onChange={onChange} />
                            <label className='optionsTitle'>Three Cheese</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='pineapple' name='pineapple' onChange={onChange} />
                            <label className='optionsTitle'>Pineapple</label>
                        </div>
                        <div className="choiceOptions">    
                            <input type='checkbox' className="sauce" value='extraCheese' name='extraCheese' onChange={onChange} />
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
                        <input type='checkbox' className="sauce" value='glutenFreeCrust' name='sauce' onChange={onChange} />
                        <label className='optionsTitle'>Gluten Free Crust (+ $1.00)</label>
                    </div>
                </div>
                <label className="choices">
                    <h4>Special Instructions</h4>
                    <p></p>
                </label>
                <div className="choiceDiv">
                    <div className="choiceOptions">
                        <input type='text' id="specialInst" value="Anything else you'd like to add?" name='special' onChange={onChange} />
                        <label className='optionsTitle'></label>
                    </div>
                </div>
                <div className="submitInfo">
                    <input type="number" className="size-36" value="1" min="1" max="10" step="1" />
                    <button id='order-button'>Add to Order</button>
                </div>
            </form>
        </div>
    )
}


export default PizzaForm;

