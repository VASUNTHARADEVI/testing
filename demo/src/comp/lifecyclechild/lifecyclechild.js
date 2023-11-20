import React, { Component } from "react";

class Lifecyclechild extends Component {
  constructor(){
    console.log("this is a child constructor")
    super();
   
  }
  componentDidMount=()=>{
    console.log("child did mount")
  }
  componentDidUpdate=()=>{
    console.log("component did update in child")
  }
  componentWillUnmount=()=>{
    console.log("component will unmount")
  }
  render() {
    console.log("this is a child render")
    return <div>Lifecyclechild</div>;
  }
}

export default Lifecyclechild;
