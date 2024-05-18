import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';





const Budget = () => {
    const { budget, currency, expenses , dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
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
            alert("You can not reduce the budget value lower than the spending "+ currency  + totalExpenses);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
        
    }




    return (
    <div>  
        <div className='alert alert-secondary d-inline-flex' style={{width:'100%'}}>
            <span className='align-self-center'>Budget: </span>
            <div style={{display:'block', marginLeft: '1rem'}} id='actualBudget'>
                <span className='align-self-center'>{currency}{budget}</span>
                <button className="btn btn-primary"  onClick={showChangeForm} style={{ marginLeft: '2rem' }}>
                    Change
                </button>
            </div>
        <div id='changeBudget' style={{display:'none'}}>
            <div className='row'>
            <div className="input-group" style={ {marginTop: '0.1rem', marginLeft:'.5rem'}} >
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect03">{currency}</label>
                        </div>
                        <input
                                className='aling-self-center form-control'
                                type='number'
                                step="10"
                                value={newBudget}
                                style={{ width: '6rem'}}
                                onChange={(e)=> setNewBudget(e.target.value)}>
                        </input>
                        <button className="btn btn-primary" onClick={saveChanges} style={{ marginLeft: '1rem' }}>
                            Save
                        </button>
                    </div>
                </div>
        </div>
        </div>
    </div>
    );
};

export default Budget;