import React, { Component } from "react";
import axios from "axios";

class Student extends Component {
  constructor(){
    super();
      this.state ={
        student:[],
        name:"",
    
    }
  }

  componentDidMount=()=>{
    this.getData();
  }

  getData =()=>{
    axios.get(" http://localhost:3000/student").then((resp)=>{
      console.log("resp",resp);
      this.setState({student:resp.data},()=>{
        console.log("this.state",this.state);
      })
    })
  }

  addStudent=()=>{
    axios.post(" http://localhost:3000/student",{name:this.state.name}).then((resp)=>{
       console.log("resp",resp);
       this.getData();
    })
  }

  render() {
    const {student} =this.state
    return <>
    <h1>axios method</h1>
    <div>
      <input type ="text" onChange={(e)=>this.setState({name:e.target.value})}></input>
      <button onClick={this.addStudent}>add</button>
      <ul>
        {
          student&&student.length>0 && student.map((stu)=>{
            return <li key ={stu.no}>{stu.no}.{stu.name}</li>
          })
        }
      </ul>
    </div>
    
    </>;
  }
}

export default Student;
