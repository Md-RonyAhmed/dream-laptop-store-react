import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
  const { name, brand, price, pic } = props.product;
  return (
    <div className="product">
      <img src={pic} alt=""></img>
      <h4>Brand: {brand}</h4>
      <h6>Model: {name}</h6>
      <h5>Price: $ {price}</h5>
      <button type="button" className="btn btn-primary d-block w-100">
        Add to cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;