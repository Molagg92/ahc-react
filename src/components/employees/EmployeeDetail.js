import React from "react";
import PropTypes from "prop-types";


function EmployeeDetail(props){
  const { employee, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Employee Detail</h1>
      <h3>{employee.location} - {employee.names}</h3>
      <p><em>{employee.issue}</em></p>
      <button onClick={onClickingEdit}>Update Employee</button>
      <button onClick={()=> onClickingDelete(employee.id)}>Close Employee</button>
      <hr/>
    </React.Fragment>
  );
}

EmployeeDetail.propTypes = {
  employee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default EmployeeDetail;
