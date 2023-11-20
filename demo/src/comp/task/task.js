import React, { useEffect, useState } from "react";
import axios from "axios";
import "./task.css";
import { BrowserRouter as Link} from "react-router-dom";

function Task() {
  const [student, setStudent] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editStudent, setEditStudent] = useState({ id: null, newName: "", mailId: "" });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3000/student").then((resp) => {
      setStudent(resp.data);
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const addStudent = () => {
    const newStudent = {
      name: name,
      mailId: email,
    };

    axios.post("http://localhost:3000/student", newStudent).then((resp) => {
      console.log("resp", resp);
      getData();
    });

    setName("");
    setEmail("");
  };

  const deleteStudent = (elementId) => {
    axios.delete(`http://localhost:3000/student/${elementId}`).then((resp) => {
      console.log("resp", resp);
      setStudent((prevStudents) => prevStudents.filter((stu) => stu.id !== elementId));
    });
  };

  const editfun = (id, names) => {
    setEditStudent({
      id: id,
      newName: names.name,
      mailId: names.mailId,
    });
  };

  const handleSave = () => {
    axios.put(`http://localhost:3000/student/${editStudent.id}`, {
      name: editStudent.newName,
      mailId: editStudent.mailId,
    }).then((res) => {
      console.log("resp", res);
      getData(); 
    });
    setEditStudent({ id: null, newName: "", mailId: "" }); 
  };

  return (
    <>
      <label>Name:</label>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={handleNameChange}
      /><br />

      <label>Email:</label>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
      /><br />

      <button onClick={addStudent}>Submit</button>
      <Link to="/newForm">
        <button> VIEW DETAILS</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {student &&
            student.length > 0 &&
            student.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>
                  {stu.id === editStudent.id ? (
                    <input
                      type="text"
                      value={editStudent.newName}
                      onChange={(e) => setEditStudent({ ...editStudent, newName: e.target.value })}
                    />
                  ) : (
                    stu.name
                  )}
                </td>
                <td>{stu.id === editStudent.id ? (
                    <input
                      type="text"
                      value={editStudent.mailId}
                      onChange={(e) => setEditStudent({ ...editStudent, mailId: e.target.value })}
                    />
                  ) : (
                    stu.mailId)}</td>
                <td>
                  {stu.id === editStudent.id ? (
                    <button onClick={handleSave}>Save</button>
                  ) : (
                    <button onClick={() => editfun(stu.id, stu)}>Edit</button>
                  )}
                  <button onClick={() => deleteStudent(stu.id)}>Delete</button>
                </td>
               </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Task;
