import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewServiceForm(props){

  function handleNewServiceFormSubmission(event) {
    event.preventDefault();
    props.onNewServiceCreation({
      names: event.target.names.value, 
      type: event.target.type.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewServiceFormSubmission}
        buttonText="Service!" />
    </React.Fragment>
  );
}

NewServiceForm.propTypes = {
  onNewServiceCreation: PropTypes.func
};

export default NewServiceForm;