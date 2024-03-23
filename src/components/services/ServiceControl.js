import NewServiceForm from './NewServiceForm';
import ServiceList from './ServiceList';
// import EditServiceForm from './EditServiceForm';
import ServiceDetail from './ServiceDetail';
import React, { useState } from 'react'

function ServiceControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainServiceList, setMainServiceList] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  // const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedService != null) {
      setFormVisibleOnPage(false);
      setSelectedService(null);
      // setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  // const handleEditClick = () => {
  //   setEditing(true);
  // }

  // const handleEditingEmployeeInList = (employeeToEdit) => {
  //   const editedMainEmployeeList = mainEmployeeList
  //   .filter(employee => employee.id !== selectedEmployee.id)
  //   .concat(employeeToEdit);
  //   setMainEmployeeList(editedMainEmployeeList);
  //   setEditing(false);
  //   setSelectedEmployee(null);
  // }

  const handleDeletingService = (id) => {
    const newMainServiceList = mainServiceList.filter(service => service.id !== id);
    setMainServiceList(newMainServiceList);
    setSelectedService(null);
  }

  const handleAddingNewServiceToList = (newService) => {
    const newMainServiceList = mainServiceList.concat(newService);
    setMainServiceList(newMainServiceList);
    setFormVisibleOnPage(false)
  }

  const handleChangingSelectedService = (id) => {
    const selection = mainServiceList.filter(service => service.id === id)[0];
    setSelectedService(selection);
  }
  

  let currentlyVisibleState = null;
  let buttonText = null; 

  // if (editing ) {      
  //   currentlyVisibleState = <EditEmployeeForm employee = {selectedEmployee} 
  //   onEditEmployee = {handleEditingEmployeeInList} />
  //   buttonText = "Return to Employee List";
  // } else
  
  if (formVisibleOnPage) {
    currentlyVisibleState = <NewServiceForm onNewServiceCreation={handleAddingNewServiceToList}/>;
    buttonText = "Return to Service List"; 
  } 
  else if (selectedService != null) {
    currentlyVisibleState = <ServiceDetail 
    service={selectedService} 
    onClickingDelete={handleDeletingService}
    // onClickingEdit = {handleEditClick}
     />
    buttonText = "Return to Service List";
  }
  else {
    currentlyVisibleState =  <ServiceList 
    onServiceSelection={handleChangingSelectedService} 
    serviceList={mainServiceList} />;
    buttonText = "Add Service";  
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button> 
    </React.Fragment>
  );
}

export default ServiceControl;