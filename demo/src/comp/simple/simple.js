import React, { Component } from "react";

class Simple extends Component {
  constructor(){
    super();
    this.state={
      student:[]
     }
  }

  render() {
    return <>
    <h1>get method</h1>
    <table>
      <thead>
       <tr>
       <td>ID</td>
        <td>NAME</td>
       </tr>
       <tbody>
       
       </tbody>
       
      </thead>
    </table>
    
    </>;
  }
}

export default Simple;
