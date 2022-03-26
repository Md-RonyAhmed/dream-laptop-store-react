import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = ({handleAddToCart,product}) => {
  const {name, brand, price, pic } = product;
  return (
    <div className="product">
      <img src={pic} alt=""></img>
      <h4>Brand: {brand}</h4>
      <h6>Model: {name}</h6>
      <h5>Price: $ {price}</h5>
      <button
        onClick={() => handleAddToCart(product)}
        type="button"
        className="btn btn-outline-info d-block w-100"
      >
        Add to cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;