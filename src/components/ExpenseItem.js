import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "bootstrap-icons/font/bootstrap-icons.css";


const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><i onClick={event=> increaseAllocation(props.name) } class="bi bi-plus-circle-fill" style={{color:'green', cursor:'pointer'}}></i></td>
        <td><i onClick={event=> decreaseAllocation(props.name)} class="bi bi-dash-circle-fill" style={{color:'red', cursor:'pointer'}}></i></td>
        <td><i onClick={handleDeleteExpense} class="bi bi-trash" style={{ cursor:'pointer'}}></i></td>
        </tr>
    );
};

export default ExpenseItem;