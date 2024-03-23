import React from "react";
import PropTypes from "prop-types";

function Service(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenServiceClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue} - {props.type}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Service.propTypes = {
  names: PropTypes.string,
  type: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenServiceClicked: PropTypes.func,
};
export default Service;