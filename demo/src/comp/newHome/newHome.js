import React, { Component } from "react";
import Lifecycle from "./comp/lifecycle/lifecycle";
import Fetch from "./comp/fetch/fetch";
import Header from "./comp/header/header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class NewHome extends Component {
  render() {
    return <>
    <Router>
        <ul>
          <li>
            <Link to="/ccc">Lifecycle</Link>
          </li>
          <li>
            <Link to="/Fetch">Fetch</Link>
          </li>
          <li>
            <Link to="/Header">Header</Link>
          </li>
       
        </ul>

        <Routes>
          <Route path="/Lifecycle" element={<Lifecycle></Lifecycle>}></Route>
          <Route path="/Fetch" element={<Fetch></Fetch>}></Route>
          <Route path="/Header" element={<Header></Header>}></Route>
        </Routes>
      </Router>
    </>
  }
}

export default NewHome;
