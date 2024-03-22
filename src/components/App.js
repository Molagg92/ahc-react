import React from "react";
import Header from "./Header";
import EmployeeControl from "./employees/EmployeeControl";
import ServiceControl from "./services/ServiceControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <EmployeeControl />
      <ServiceControl />
    </React.Fragment>
  );
}

export default App;