import React from 'react'

const BtnDelete = props =>{

    const{employeeId, handleRemoveEmployee} = props

    return(
        <button className="button is-danger is-rounded" onClick={()=> handleRemoveEmployee(employeeId)}>
            <span className='icon is-small'>
            <i className='fas fa-times' />
            </span>
            <span>Delete</span>
        </button>
    )
}

export default BtnDelete