import React, { Component } from "react";


class Header extends Component {
  constructor(){
    super();
    this.state={
      title:"crud operations",
      place:"urrapakkam"
    }
  }
  updateAdress =()=>{
    this.setState({place:"chennai"})
    console.log("this.state",this.state);
  }
 render(){
  return(
    <>
    <div className="head">header
    <div>{this.state.title} is in {this.state.place}</div>
    <button onClick ={this.updateAdress}>change the address</button>
    </div></>
  )
 }
}

export default Header;
