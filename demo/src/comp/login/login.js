import React from "react";
import Form from "../form/form";
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import Table from "../table/table";

function Login() {
  return (
    <>
      <Router>
        <ul>
          <nav>
            <Link to="/"></Link>
          </nav>
        </ul>
        <Routes>
          <Route  exact path="/" element={<Form></Form>}></Route>
          <Route path="/table" element ={<Table></Table>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Login;
