import React from 'react';
import '../App/index.css';
import Header from '../Header'
import Footer from '../Footer'
import Wrapper from '../Wrapper'
import Input from '../Input'
import Card from '../Card'
import faker from 'faker'
import Dropdown from '../Dropdown';


class App extends React.Component{
  constructor(){
    super()
    //faker.seed(123);
    faker.setLocale = 'us';
    const employees = Array.from({ length: 30 }, () => ({
      name: faker.name.findName(),
      sector: faker.name.jobArea(),
      avatar: faker.image.avatar(),
      id: faker.random.uuid(),
    }))

    const sectors = employees.map(({ sector }) => sector)
    const sectorsUnrepeated = new Set(sectors)
    const sectorsArray = [...sectorsUnrepeated]

    console.log(employees);
    //Inicializar state
    this.state = {
      date: new Date(),
      nameAlumno: "",
      users:[],
      list: employees,
      sectorFilter: '',
      listBackup: employees,
      empleadoDelMes: null,
      sectors: sectorsArray,
      dropdownState: true,
      selectedSector: '',
      nameToEdit: '',
      employeeToEdit: '',
    };
    this.handleEmpleadoMesClick = this.handleEmpleadoMesClick.bind(this) //Linea Monstruosa
    this.handleAddEmployeeChange = this.handleAddEmployeeChange.bind(this)
    this.handleAddEmployeeSubmit = this.handleAddEmployeeSubmit.bind(this)
  }

  handleGenreChange = event => {
    const { value } = event.target
    const { listBackup } = this.state
    const listFilteredByGenre = listBackup.filter(employee => employee.sector === value)
    this.setState({ 
        sectorFilter: value,
        selectedSector: value,
        list: listFilteredByGenre,
        dropdownState: false,
    })
}


// VOLVER A MOSTRAR LA LISTA ORIGINAL DESPUÉS DE FILTRAR ---------------------

handleRemoveSelectedGenre = () => {
this.setState(prevState => ({ 
    list: prevState.listBackup, 
    selectedSector: '',
    dropdownState: true,
}))
}

  handleRemoveEmployee = id => {
    const { listBackup } = this.state
    const listWithoutemployee = listBackup.filter(employee => employee.id !== id)
    this.setState({ 
        list: listWithoutemployee,
        listBackup: listWithoutemployee, 
    })
  }

  handleEmpleadoMesClick(employeeId){
    console.log(employeeId)
    this.setState({
        empleadoDelMes:employeeId
    })
  }

  
//Agregar empleado
handleAddEmployeeChange = event =>{
  console.log("pasé por acá Change");
  const {value} = event.target
  this.setState({employeeName: value})
}

handleAddEmployeeSubmit = event => {
  console.log("pasé por acá submit");
  event.preventDefault();
  const{list, employeeName} = this.state
  
  const newEmployee = {
    name: employeeName,
    sector: faker.name.jobArea(),
    avatar: faker.image.avatar(),
    id: faker.random.uuid()
  }
  const newList = [newEmployee, ...list]
  this.setState({list: newList})
}

  // La llama el botón de "EDIT" que está en el componente CARD. Guarda en el state todo lo que aparece en setState
  handleEditEmployee = id => {
    const { list } = this.state;
    const selectedemployee = list.find(employee => employee.id === id)
    this.setState({
        employeeToEdit: selectedemployee,
        modalActive: true, // Abre el modal
        nameToEdit: selectedemployee.name,
    })
  }

  // La llama el INPUT del MODAL que está más abajo con el evento ONCHANGE. Guarda lo que el usuario escribe en el input. 
  editEmployeeName = event =>{
    const { value } = event.target
    this.setState(prevState => (
        {
            nameToEdit: value,
            employeeToEdit: { ...prevState.employeeToEdit, name: value}
        })
    )

  }

  // La llama el SUBMIT del FORM del MODAL. Guarda el nombre editado y lo muestra en la CARD. 
  changeemployeeName = event => {
    event.preventDefault();
    const { employeeToEdit, list } = this.state;
    const listWithoutemployee = list.filter(employee => employee.id !== employeeToEdit.id)
    this.setState({
        modalActive: false,
        list: [employeeToEdit, ...listWithoutemployee],
        listBackup: [employeeToEdit, ...listWithoutemployee],
    })

  }

  // CIERRA EL MODAL 
  handleClose = () =>{
    this.setState({
        modalActive: false
    })
}

  render(){
    //Mostrar data en HTML
    //Se ejecuta al inicio y cada vez que cambia el state

    const {
      sectors,
      modalActive
    } = this.state

    return (
      
      <div className="App">
        <Header />
        <Wrapper />
        <Input 
        handleAddEmployeeChange={this.handleAddEmployeeChange}
        handleAddEmployeeSubmit={this.handleAddEmployeeSubmit}
        />
        <Dropdown 
          sectors={sectors}
          handleSelectGenre={this.handleSelectGenre}
          handleGenreChange={this.handleGenreChange}
          handleRemoveSelectedGenre={this.handleRemoveSelectedGenre}
          selectedSector = {this.state.selectedSector}
          dropdownState = {this.state.dropdownState}
        />

        {modalActive && (
                    <div className='modal is-active'>
                        <div className='modal-background' />
                        <div className='modal-card'>
                            <header className='modal-card-head backgroundModal'>
                                <p className='modal-card-title'>Edit employee name</p>
                                <button onClick={this.handleClose} className='delete' aria-label='close' />    
                            </header>
                            <section className='modal-card-body backgroundEditModal'>
                                <form onSubmit={this.changeemployeeName}  className='form-add-employee'>
                                    <input
                                        className='input'
                                        type='text'
                                        defaultValue={this.state.nameToEdit}
                                        onChange = {this.editEmployeeName}
                                    />
                                    <button class="button submitBtn space">Save</button>
                                </form>
                            </section>
                        </div>
                    </div>
                )}

        <div className="list">
        {
          this.state.list.map((employee)=>
            <Card 
              employeeData={employee} key={employee.id} handleEmpleadoMesClick={this.handleEmpleadoMesClick} handleRemoveEmployee={this.handleRemoveEmployee} empleadoDelMesID = {this.state.empleadoDelMes} handleEditEmployee = {this.handleEditEmployee}
            />
          )    
        }
        </div>
        <Footer texto="Este es mi footer horrible" fecha={this.state.date} />
      </div>
    )
  }
}

export default App;