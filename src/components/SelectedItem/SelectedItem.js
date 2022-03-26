import React from 'react';
import './SelectedItem.css';
const SelectedItem = (props) => {
   const { name } = props.cart;
   return (
      <div className="select">
         <h4>{name}</h4>
      </div>
   );
};
export default SelectedItem;