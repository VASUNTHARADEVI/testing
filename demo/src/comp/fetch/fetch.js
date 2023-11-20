import React, { Component } from "react";


class Fetch extends Component {
  constructor(){
    super();
    this.state={
      athelete:[]
    }
  }
  componentDidMount(){
    fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json').then(resp=>resp.json().then(resp=>{
    console.log("resp",resp)
    this.setState({athelete:resp})
  }))

}
 render() {
const {athelete}=this.state
console.log("athlate",athelete)
    return <>
    <div><h1 className="fetch" >ATHELATE DATA</h1></div>
        <table>
        <tr>
        <th>NAME</th>
        <th>AGE</th>
        </tr> 
        {athelete.map((alt,index)=>{
        return <tr key={index}>
        <td>{alt.athlete}</td>
        <td>{alt.age}</td>
        </tr>
        }
        )}
        </table>
          
      
    </>
      
  }
}

export default Fetch;

