import NewEmployeeForm from './NewEmployeeForm';
import EmployeeList from './EmployeeList';
// import EditTicketForm from './EditTicketForm';
// import TicketDetail from './TicketDetail';
import React, { useState } from 'react'

function EmployeeControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainEmployeeList, setMainEmployeeList] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedEmployee != null) {
      setFormVisibleOnPage(false);
      setSelectedEmployee(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  // const handleAddingNewEmployeeToList = (newEmployee) => {
  //   const newMainEmployeeList = mainEmployeeList.concat(newEmployee);
  //   setMainEmployeeList(newMainEmployeeList);
  //   setFormVisibleOnPage(false)
  }

  const handleChangingSelectedEmployee = (id) => {
    const selection = mainEmployeeList.filter(employee => employee.id === id)[0];
    setSelectedEmployee(selection);
  }

  let currentlyVisibleState = null;
  let buttonText = null; 

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewEmployeeForm onNewEmployeeCreation={handleAddingNewEmployeeToList}/>;
    buttonText = "Return to Employee List"; 
  } else {
    currentlyVisibleState =  <EmployeeList 
    onEmployeeSelection={handleChangingSelectedEmployee} 
    employeeList={mainEmployeeList} />;
    buttonText = "Add Employee";  
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button> 
    </React.Fragment>
  );
}

export default EmployeeControl;