import React, { Component } from "react";
import axios from "axios";
import "./eproductdetails.css"

class Eproductdetails extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }
  componentDidMount = () => {
    this.getData();
  };
  getData = () => {
    axios.get("http://localhost:3000/product").then((resp) => {
      console.log("resp", resp);
      this.setState({ product: resp.data }, () => {
        console.log("this.state", this.state);
      });
    });
  };
  
  render() {
    const { product } = this.state;
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>IMAGE</th>
              <th>CART</th>
            </tr>
          </thead>
          {product.map((alt, index) => {
            return (
              <tbody>
                <tr key={index}>
                  <td>{alt.id}</td>
                  <td>{alt.name}</td>
                  <td>{alt.price}</td>
                  <td><img src={alt.image}></img></td>
                  <td><button className="button">add to cart</button></td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </>
    );
  }
}

export default Eproductdetails;
