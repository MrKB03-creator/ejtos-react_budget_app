import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';




const Currency = () => {
    const {  currency , dispatch } = useContext(AppContext);   
    const [newCurrency, setNewCurrency] = useState(currency);


    
    const handleSelect = (currency) => {
        setNewCurrency(currency);
       
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
        
    }




    return (
    <Dropdown>
        <Dropdown.Toggle 
            
            className='btn dropdown-toggle'
            variant="success"
            id="dropdown-basic" 
            size='lg'
            autoClose="inside"
            style={{height:'4rem', width:'100%'}}>
            Currency: {newCurrency}
        </Dropdown.Toggle>

        <Dropdown.Menu 
            align={{ lg: 'start' }}
            className='btn btn-outline-success'
            style={{background:'lightgreen', width:'80%'}}>
            <Dropdown.Item onClick={() => handleSelect('£')} className="text-dark"  >£ Pound</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect('$')}>$ Dollar</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect('€')}>€ Euro</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect('₹')}>₹ Ruppee</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
};

export default Currency;