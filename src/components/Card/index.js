import React from 'react';
import Boton from '../Boton';
import '../Card/index.css'
import BtnEmpladoDelMes from '../EmpleadoDelMes';
import BtnDelete from '../DeleteBtn';


//const Card = ({name, category}) => {

const Card = (props) => {
    const{employeeData, handleEmpleadoMesClick, handleRemoveEmployee, empleadoDelMesID, handleEditEmployee} = props;
    const {name, sector, id, avatar} = employeeData;
    const isMonthEmployee = empleadoDelMesID === id

    return (
        <div className={`cont ${isMonthEmployee ? 'bg-employee' : ''}`}>
            <div className="info" id={id}>
                <div className="avatar">
                    <img src={avatar} alt=""></img>
                </div>
                <div className="names">
                    <h2>{name}</h2>
                    <p>{sector}</p>
                </div>
            </div>
            <div className="buttons">
                <Boton caption={"Editar"} handleEditEmployee={handleEditEmployee} employeeId={id}/>
                <BtnDelete caption={"Eliminar"} handleRemoveEmployee={handleRemoveEmployee} employeeId={id}/>
                {!isMonthEmployee && 
                <BtnEmpladoDelMes employeeId={id} handleEmpleadoMesClick={handleEmpleadoMesClick} />
                }
            </div> 
        </div>
    );
}

export default Card