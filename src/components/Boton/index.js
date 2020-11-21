import React from 'react';

const Boton = props =>{
    const { caption, handleEditEmployee, employeeId } = props;
    const handleClick= (event) => console.log('clicked', event);
    
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