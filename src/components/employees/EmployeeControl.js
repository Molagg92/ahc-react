import NewEmployeeForm from './NewEmployeeForm';
import EmployeeList from './EmployeeList';
// import EditEmployeeForm from './EditEmployeeForm';
import EmployeeDetail from './EmployeeDetail';
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

  const handleDeletingEmployee = (id) => {
    const newMainEmployeeList = mainEmployeeList.filter(employee => employee.id !== id);
    setMainEmployeeList(newMainEmployeeList);
    setSelectedEmployee(null);
  }

  const handleAddingNewEmployeeToList = (newEmployee) => {
    const newMainEmployeeList = mainEmployeeList.concat(newEmployee);
    setMainEmployeeList(newMainEmployeeList);
    setFormVisibleOnPage(false)
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
  } else if (selectedEmployee != null) {
    currentlyVisibleState = <EmployeeDetail 
    employee={selectedEmployee} 
    onClickingDelete={handleDeletingEmployee}
    // onClickingEdit = {handleEditClick} 
    />
    buttonText = "Return to Employee List";
  }else {
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