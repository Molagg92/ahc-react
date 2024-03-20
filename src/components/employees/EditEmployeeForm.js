import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditEmployeeForm (props) {
  const { employee } = props;

  function handleEditEmployeeFormSubmission(event) {
    event.preventDefault();
    props.onEditEmployee({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: employee.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditEmployeeFormSubmission} 
        buttonText="Update Employee" />
    </React.Fragment>
  );
}

EditEmployeeForm.propTypes = {
  onEditEmployee: PropTypes.func,
  employee: PropTypes.object
};

export default EditEmployeeForm;