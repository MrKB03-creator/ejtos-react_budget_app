import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';





const Budget = () => {
    const { budget, currency, expenses , dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [newCurrency, setNewCurrency] = useState(currency);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    
    const showChangeForm = () => {
        document.getElementById('changeBudget').style.display = 'block';
        document.getElementById('actualBudget').style.display = 'none';
    }

    const saveChanges = () => {
        document.getElementById('changeBudget').style.display = 'none';
        document.getElementById('actualBudget').style.display = 'block';

        if (newBudget > 20000) {
            alert("Budget limit is " +currency + "20,000");
            return;
        } 
    
        if (totalExpenses > newBudget) {
            alert("You can not reduce the budget lower than the spending "+ newCurrency  + totalExpenses);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
        
    }




    return (
    <div>
        <div className='alert alert-secondary' id='actualBudget' style={{display:'block'}}>
            <span>Budget: {currency}{budget}</span>
            <button className="btn btn-primary"  onClick={showChangeForm} style={{ marginLeft: '2rem' }}>
                Change
             </button>
        </div>
       
        <div id='changeBudget' style={{display:'none'}}>
            <div className='row' style={{ marginTop: '1rem'}}>
            <div className="input-group mb-3">
                    <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect03">Currency</label>
                    </div>
                        <select 
                            className="form-select"
                            id="inputGroupSelect03" 
                            value={newCurrency}
                            onChange={(e)=> setNewCurrency(e.target.value)}   
                        >  
                            <option value="£" name="Pound" >£ Pound</option>
                            <option value="$" name="Dollar">$ Dollar</option>
                            <option value="€" name="Euro">€ Euro</option>
                            <option value="₹" name="Ruppee">₹ Ruppee</option>
                        </select> 
                        
                        <div className="input-group-prepend"style={{ marginLeft: '1rem' }}>
                            <label className="input-group-text" htmlFor="inputGroupSelect03">{newCurrency}</label>
                        </div>
                        <input
                                type='number'
                                step="10"
                                value={newBudget}
                                style={{ width: '6rem' }}
                                onChange={(e)=> setNewBudget(e.target.value)}>
                        </input>
                        <button className="btn btn-primary" onClick={saveChanges} style={{ marginLeft: '1rem' }}>
                            Save
                        </button>
                    </div>
                </div>
        </div>
    </div>
    );
};

export default Budget;