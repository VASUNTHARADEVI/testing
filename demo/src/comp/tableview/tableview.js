import React from "react";
import { BrowserRouter as Router ,Routes, Route ,Link } from "react-router-dom";
import NewForm from "../newform/newform";
import Task from "../task/task";

export default function TableView() {
  return (
    <>
      <Router>
        <Link to="/"></Link>
        <Routes>
          <Route exact path="/" element={<Task />} />
          <Route path="/newForm" element={<NewForm />} />
        </Routes>
      </Router>
    </>
  );
}
