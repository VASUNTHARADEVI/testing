import React, { Component } from "react";
import axios from "axios";
import "./edit.css";

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      student: [],
      name: "",
      id: "",
      editId: {
        id: null,
        newName: "",
      },
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios.get("http://localhost:3000/student").then((resp) => {
      console.log("resp", resp);
      this.setState({ student: resp.data }, () => {
        console.log("this.state", this.state);
      });
    });
  };

  addStudent = () => {
    axios
      .post(" http://localhost:3000/student", { name: this.state.name })
      .then((resp) => {
        console.log("resp", resp);
        this.getData();
      });
  };

  deleteStudent = (elementId) => {
    axios.delete(`http://localhost:3000/student/${elementId}`).then((resp) => {
      console.log("resp", resp);

      this.setState((prevState) => ({
        student: prevState.student.filter(
          (element) => element.id !== elementId
        ),
      }));
    });
  };

  editData = () => {
    const { editId } = this.state;
    axios
      .put(` http://localhost:3000/student/${editId.id}`, {
        name: editId.newName,
      })
      .then((res) => console.log(res, "res in edit"));
    this.getData();
    this.setState({
      editId: {
        id: null,
        newName: "",
      },
    });
  };

  editFu = (id, existingData) => {
    this.setState({
      editId: {
        id: id,
        newName: existingData.name,
      },
    });
  };

  render() {
    const { student, editId } = this.state;

    return (
      <>
        <h1>EDIT TABLE</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PUT</th>
              <th>DELETE</th>
              <th>
                <input
                  type="text"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </th>
              <th>
                <button onClick={this.addStudent}>add</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {student &&
              student.length > 0 &&
              student.map((stu) => (
                <tr key={stu.id}>
                  <td>{stu.id}</td>
                  <td>{stu.name}</td>
                  <td>
                    {stu.id === editId.id ? (
                      <div>
                        <input
                          type="text"
                          placeholder="name"
                          value={editId.newName}
                          onChange={(e) =>
                            this.setState((prevState) => ({
                              editId: {
                                ...prevState.editId,
                                newName: e.target.value,
                              },
                            }))
                          }
                        />
                        <button onClick={this.editData}>save</button>
                      </div>
                    ) : (
                      <div>
                        <button onClick={() => this.editFu(stu.id, stu)}>
                          Edit
                        </button>
                      </div>
                    )}
                  </td>
                  <td>
                    <button onClick={() => this.deleteStudent(stu.id)}>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Edit;
