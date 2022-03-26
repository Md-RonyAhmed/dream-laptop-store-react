import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectedItem from '../SelectedItem/SelectedItem';
import './Shop.css';
const Shop = () => {
   
   const [laptops, setLaptops] = useState([]);
   const [cart, setCart] = useState([]);
       
   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setLaptops(data));
   },[]);

   const handleAddToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
   }
   console.log(cart);
   return (
     <div className="shop-container">
       <div className="products-container">
         {laptops.map((product) => (
           <Product
             product={product}
             key={product.id}
             handleAddToCart={handleAddToCart}
           />
         ))}
       </div>
       <div className="cart-container">
           <h3>Selected Laptops</h3>
           {cart.map((cart) => (
             <SelectedItem cart={cart} key={cart.id} />
           ))} 
       </div>
     </div>
   );
};

export default Shop;