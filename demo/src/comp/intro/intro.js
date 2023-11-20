import React, { Component } from "react";

class Intro extends Component {
  constructor(){
    super();
    this.state={
      title:"crud operations",
      place:"urrapakkam"
    }
  }
  //only console change--setState
  // updateAdress =()=>{
  //  this.state.place="chennai"
  //  console.log("this.state",this.state);
  // }
  
  //change both data and view--callback function
  updateAdress =()=>{
    this.setState({place:"chennai"})
    console.log("this.state",this.state);
  }
  render() {
    return <>
    <div>{this.state.title} is in {this.state.place}</div>
    <button onClick ={this.updateAdress}>change the address</button>
    </> 
  }
}

export default Intro;
