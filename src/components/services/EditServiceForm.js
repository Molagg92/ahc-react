import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditServiceForm (props) {
  const { service } = props;

  function handleEditServiceFormSubmission(event) {
    event.preventDefault();
    props.onEditService({
      names: event.target.names.value, 
      type: event.target.type.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: service.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditServiceFormSubmission} 
        buttonText="Update Service" />
    </React.Fragment>
  );
}

EditServiceForm.propTypes = {
  onEditService: PropTypes.func,
  service: PropTypes.object
};

export default EditServiceForm;