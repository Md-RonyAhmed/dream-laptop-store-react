import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
   
   const [laptops, setLaptops] = useState([]);
       
   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setLaptops(data));
   }, [laptops]);

   const handleAddToCart = (product) => {
     
  }
   return (
     <div className="shop-container">
       <div className="products-container">
         {laptops.map((product) => (
            <Product product={product}
               key={product.id}
               handleAddToCart={handleAddToCart} />
         ))}
       </div>
       <div className="cart-container">
         <h1>This is cart</h1>
       </div>
     </div>
   );
};

export default Shop;