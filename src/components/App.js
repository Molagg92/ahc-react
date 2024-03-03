import React from "react";
import Header from "./Header";
import EmployeeControl from "./employees/EmployeeControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <EmployeeControl />
    </React.Fragment>
  );
}

export default App;