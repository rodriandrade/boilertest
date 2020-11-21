import React from 'react'

const BtnEmpladoDelMes = (props) =>{

    const{employeeId, handleEmpleadoMesClick} = props

    return(
        <button className="button is-primary is-rounded" onClick={()=> handleEmpleadoMesClick(employeeId)}>
            <span className='icon is-small'>
            <i className='fas fa-award' />
            </span>
            <span>Empleado del mes</span>
        </button>
    )
}

export default BtnEmpladoDelMes