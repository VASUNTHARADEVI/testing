import React, { Component } from "react";
import axios from "axios";

class TableCreation extends Component {
    constructor(){
        super();
        this.state={
              student:[],
              name:"",
            
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
    
        return (
            <>
        
            <h1>axios List</h1>
            <ul>
              {student.map((element => (
                <li key={element.id}>
                  {element.name}
                  <button onClick={() => this.deleteStudent(element.id)}>Delete</button>
                </li>
              )))}
            </ul>

          </>
        );
              }
              }   
export default TableCreation;
