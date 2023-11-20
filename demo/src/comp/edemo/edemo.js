import React, { Component } from "react";
import "./edemo.css";

class Edemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      formDataList: [],
      editId: null,
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = this.state;
    if (name && email) {
      const formData = { name, email };
      this.setState((prevState) => ({
        name: "",
        email: "",
        formDataList: [...prevState.formDataList, formData]
      }));
    }
  };

  handleEdit = (index) => {
    this.setState({ editId: index });
  };

  handleSave = (index) => {
    const { formDataList, name, email } = this.state;
    const updatedData = [...formDataList];
    updatedData[index] = { name, email };
    this.setState({
      formDataList: updatedData,
      name: "",
      email: "",
      editId: null,
    });
  };

  handleDelete = (index) => {
    const updatedData = [...this.state.formDataList];
    updatedData.splice(index, 1);
    this.setState({ formDataList: updatedData });
  };

  render() {
    const { name, email, formDataList, editId } = this.state;

    return (
      <div>
        <div className="head">
          <h1>FORM TO TABLE</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="input">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={this.handleNameChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={this.handleEmailChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((formData, index) => (
              <tr key={index}>
                <td>
                  {editId === index ? (
                    <input type="text" value={name} onChange={this.handleNameChange} />
                  ) : (
                    formData.name
                  )}
                </td>
                <td>
                  {editId === index ? (
                    <input type="email" value={email} onChange={this.handleEmailChange} />
                  ) : (
                    formData.email
                  )}
                </td>
                <td>
                  {editId === index ? (
                    <button onClick={() => this.handleSave(index)}>Save</button>
                  ) : (
                    <button onClick={() => this.handleEdit(index)}>Edit</button>
                  )}
                </td>
                <td>
                  <button onClick={() => this.handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Edemo;
