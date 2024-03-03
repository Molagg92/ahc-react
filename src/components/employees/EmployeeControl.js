import NewEmployeeForm from './NewEmployeeForm';
// import TicketList from './TicketList';
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



}
export default EmployeeControl;