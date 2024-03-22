import React from "react";
import PropTypes from "prop-types";

function StandardService(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenServiceClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Service.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenServiceClicked: PropTypes.func,
};
export default Service;