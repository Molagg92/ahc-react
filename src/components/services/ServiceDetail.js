import React from "react";
import PropTypes from "prop-types";


function ServiceDetail(props){
  const { service, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Service Detail</h1>
      <h3>{service.location} - {service.names}</h3>
      <p><em>{service.issue} - {service.type}</em></p>
      <button onClick={onClickingEdit}>Update Service</button>
      <button onClick={()=> onClickingDelete(service.id)}>Close Service</button>
      <hr/>
    </React.Fragment>
  );
}

ServiceDetail.propTypes = {
  service: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ServiceDetail;
