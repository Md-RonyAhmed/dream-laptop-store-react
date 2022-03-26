import React, { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {
   
   const [laptops, setLaptops] = useState([]);
       
   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setLaptops(data));
   }, [laptops])
   
   return (
      <div className='row'>
         <div className="col col-md-3">
            <h1>This is products:{laptops.length} </h1>
         </div>
         <div className="col">
            <h1>This is cart</h1>
         </div>
      </div>
   );
};

export default Shop;