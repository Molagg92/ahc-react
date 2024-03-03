import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewEmployeeForm(props){

  function handleNewEmployeeFormSubmission(event) {
    event.preventDefault();
    props.onNewEmployeeCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewEmployeeFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewEmployeeForm.propTypes = {
  onNewEmployeeCreation: PropTypes.func
};

export default NewEmployeeForm;