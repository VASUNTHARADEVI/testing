import React, { useState, useEffect } from "react";
import axios from "axios";

function Table() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editStudent, setEditStudent] = useState({ id: null, newName: "", mailId: "" });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3000/student").then((resp) => {
      setStudents(resp.data);
    });
  };

  const addStudent = () => {
    const newStudent = { name, mailId: email }; // Define the new student object
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
      setStudents((prevStudents) => prevStudents.filter((stu) => stu.id !== elementId));
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
    axios
      .put(`http://localhost:3000/student/${editStudent.id}`, {
        name: editStudent.newName,
        mailId: editStudent.mailId,
      })
      .then((res) => {
        console.log("resp", res);
        getData();
      });
    setEditStudent({ id: null, newName: "", mailId: "" });
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
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
          {students &&
            students.length > 0 &&
            students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>
                  {stu.id === editStudent.id ? (
                    <input
                      type="text"
                      value={editStudent.newName}
                      onChange={(e) =>
                        setEditStudent({ ...editStudent, newName: e.target.value })
                      }
                    />
                  ) : (
                    stu.name
                  )}
                </td>
                <td>
                  {stu.id === editStudent.id ? (
                    <input
                      type="text"
                      value={editStudent.mailId}
                      onChange={(e) =>
                        setEditStudent({ ...editStudent, mailId: e.target.value })
                      }
                    />
                  ) : (
                    stu.mailId
                  )}
                </td>
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

export default Table;
