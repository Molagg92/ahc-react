import NewEmployeeForm from './NewEmployeeForm';
// import TicketList from './TicketList';
// import EditTicketForm from './EditTicketForm';
// import TicketDetail from './TicketDetail';
import React, { useState } from 'react'

function TicketControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedTicket != null) {
      setFormVisibleOnPage(false);
      setSelectedTicket(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }



}