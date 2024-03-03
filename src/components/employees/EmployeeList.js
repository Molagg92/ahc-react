import React from "react";
import Employee from "./Employee";
import PropTypes from "prop-types";

function EmployeeList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.employeeList.map((employee) =>
        <Employee 
          whenEmployeeClicked={props.onEmployeeSelection}
          names={employee.names}
          location={employee.location}
          issue={employee.issue}
          id={employee.id}
          key={employee.id}/>
      )}
    </React.Fragment>
  );
}

EmployeeList.propTypes = {
  employeeList: PropTypes.array,
  onEmployeeSelection: PropTypes.func
};

export default EmployeeList;