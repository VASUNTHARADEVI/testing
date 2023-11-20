import React, { Component } from "react";
import axios from "axios";

class RowDelete extends Component {
  constructor(){
    super();
    this.state={
      student:[]
    }
  }
  componentDidMount=()=>{
    this.getData();
  }

  getData =()=>{
    axios.get('http://localhost:3000/student').then((resp)=>{
      console.log("resp",resp);
      this.setState({student:resp.data},()=>{
        console.log("this.state",this.state);
      })
    })
  }

deleteStudent=(elementId)=>{
    axios.delete(`http://localhost:3000/student/${elementId}`).then((resp)=>{
        console.log("resp",resp);
      
        this.setState((prevState)=>({
            student:prevState.student.filter(element=>element.id!==elementId)
        }));
    })
      
    }
render(){
  const { student } = this.state;

    return <>
    <h1>axios List</h1>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
      {student.map ((alt,index) =>{
        return <tr key={index}>
          <td>{alt.id}</td>
          <td>{alt.name}</td>
          <td>
            <button onClick={()=>this.deleteStudent(alt.id)}>delete</button>
          </td>
        </tr>
      })}
                
                 
     
    </table>
</>;
  }
}

export default RowDelete;
