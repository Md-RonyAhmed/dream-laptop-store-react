import React, { useEffect, useState } from 'react';
import Choose from '../Choose/Choose';
import Product from '../Product/Product';
import RemoveItem from '../RemoveItem/RemoveItem';
import SelectedItem from '../SelectedItem/SelectedItem';
import './Shop.css';
const Shop = () => {
   
   const [laptops, setLaptops] = useState([]);
   const [cart, setCart] = useState([]);
   const [select, setSelect] = useState([]);
       
   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setLaptops(data));
   }, []);

   const count = cart.length;
   const randomClick = () => {
      const number = Math.floor(Math.random() * count);
      const chooseItem = cart[number];
      setSelect(chooseItem);
   }

   const removeList = () => {
      setCart([]);
      setSelect([]);
   }
   const handleAddToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
   }
   
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
            {
               <Choose select={select}
                  randomClick={randomClick}
                  key={cart.id}/>
         }
            {
               <RemoveItem removeList={removeList} />
         }
       </div>
     </div>
   );
};

export default Shop;