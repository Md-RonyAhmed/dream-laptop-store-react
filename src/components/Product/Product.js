import React from 'react';
import './Product.css';
const Product = (props) => {
  const { name, brand, price, pic } = props.product;
  return (
    <div className="product">
      <img src={pic} alt=""></img>
        <h3>Brand: {brand}</h3>
        <h4>Model: {name}</h4>
        <h4>Price: $ {price}</h4>
    </div>
  );
};

export default Product;