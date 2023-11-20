import React, { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [mailID, setMailID] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setMailID(e.target.value);
  };

  return (
    <>
      <h1>Form</h1>
      <label>Name:</label>
      <input type="text" placeholder="Name" value={name} onChange={handleNameChange}></input><br></br>
      <label>Mail ID</label>
      <input type="email" placeholder="Mail" value={mailID} onChange={handleEmailChange}></input><br></br>
      <button>Submit</button>
      <Link to="/table">
        <button>View Details</button>
      </Link>
    </>
  );
}

export default Form;
