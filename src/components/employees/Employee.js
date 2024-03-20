import React from "react";
import PropTypes from "prop-types";

function Employee(props){
  return (
    <React.Fragment>
      {/* <div onClick = {() => props.whenEmployeeClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div> */}
    </React.Fragment>
  );
}

Employee.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenEmployeeClicked: PropTypes.func,
};
export default Employee;