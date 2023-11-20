import React from "react";
import "./dashboard.css";
import 'primeicons/primeicons.css';
        

function Dashboard(){

    return (
    <>
    <div className="main">
      <div className="leftnav">
        <h1 className="h1"><i className="pi pi-th-large" style={{ fontSize: '2rem' }}></i> Dashboard</h1>
        <ul className="ul">
          <li>Dashboard</li>
          <li>Customers</li>
          <li>Income</li>
          <li>Promate</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="rightnav"></div>
    </div>

   
  </>
    )

}

export default Dashboard;
