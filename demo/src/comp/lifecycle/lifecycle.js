import React, { Component } from "react";
import Lifecyclechild from "../lifecyclechild/lifecyclechild";

class Lifecycle extends Component {
  constructor(){
    console.log('this is parent construtor')
    super();
    this.state={
      value:"crud",
      update :true
    }
  }
//   componentDidMount=()=>{
//     console.log("this is componentDidMount parent")
//   }
//  updateState= ()=>{
//   this.setState({value:"value changed"})
//  }
//  componentDidUpdate=()=>{
//   console.log("this isupdated parent")
//  }
 shouldComponentUpdate=()=>{
  return true;
 }
  render() {
    console.log("this is parent render")
    return(
      <>
      <div>{this.state.value}</div>
      <button onClick={this.updateState}>change</button>
      <button onClick ={()=>this.setState({update:false})} >change the value</button>
      {this.state.update?<Lifecyclechild></Lifecyclechild>:""}

      </>
    )
}
}
export default Lifecycle;
