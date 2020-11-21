import React from 'react';

const Boton = props =>{
    const {handleEditEmployee, employeeId } = props;
    
    return(
        <button onClick = { () => handleEditEmployee(employeeId) } className="button is-link is-rounded">
        <span className='icon is-small'>
            <i className='fas fa-edit' />
            </span>
            <span>Edit</span>
        </button> 
    )
}

export default Boton;