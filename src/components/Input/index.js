import React from "react";
import "../Input/index.css";

const Input = (props) => {
  const {
    employeeName,
    handleAddEmployeeSubmit,
    handleAddEmployeeChange,
  } = props;

  return (
    /*
        <div>
            <input className="input is-rounded" type="text" placeholder="Rounded input"></input>
            <Boton caption={"Let's go!"} />
        </div>
        */
        <div className="">
             <input
                className="input is-rounded"
                type="text"
                placeholder="Rounded input"
                onChange={handleAddEmployeeChange}
                value={employeeName}
            />
            <button onClick={handleAddEmployeeSubmit} className="button is-link is-rounded">
                Add Employee!
            </button>
        </div>
    /*
       <form onSubmit={this.handleAddEmployeeSubmit} className='form-add-employee'>
       <input
           className='input'
           type='text'
           value={employeeName}
           onChange={this.handleAddEmployeeChange}
       />
       <button className='button-is-success' type ='submit' >
           Add Employee!
       </button>
   </form>
        */
  );
};

export default Input;
