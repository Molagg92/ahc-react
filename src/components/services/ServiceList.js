import React from "react";
import Service from "./Service";
// import DeepCleaningService from "./DeepCleaningService";
import PropTypes from "prop-types";

function ServiceList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.serviceList.map((service) =>
        <Service 
          whenServiceClicked={props.onServiceSelection}
          names={service.names}
          type={service.type}
          location={service.location}
          issue={service.issue}
          id={service.id}
          key={service.id}/>
          
      )}
      {/* {props.serviceList.map((service) =>
        <DeepCleaningService 
          whenServiceClicked={props.onServiceSelection}
          names={service.names}
          type={service.type}
          location={service.location}
          issue={service.issue}
          id={service.id}
          key={service.id}/>
          
      )} */}
    </React.Fragment>
  );
}

ServiceList.propTypes = {
  serviceList: PropTypes.array,
  onServiceSelection: PropTypes.func
};

export default ServiceList;