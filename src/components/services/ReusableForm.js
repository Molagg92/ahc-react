import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Service Names' />
        <input
          type='text'
          name='location'
          placeholder='Service Address' />
      <select name="type" placeholder="Service Type">
        <option value="standard">Standard</option>
        <option value="deep_cleaning">Deep Cleaning</option>
      </select>
        <textarea
          name='issue'
          placeholder='Service issue? [working test].' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
