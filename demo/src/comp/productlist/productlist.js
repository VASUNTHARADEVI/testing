// import React, { Component } from "react";

// class Productlist extends Component {
//   render() {
//     return <div>Productlist</div>;
//   }
// }

// export default Productlist;
import React from 'react';

function Productsdetails({ addToCart }) {
  const products = [
    { id: 1, name: 'Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', price: 15.0 },
    { id: 3, name: 'Product 3', price: 15.0 },
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productsdetails;
