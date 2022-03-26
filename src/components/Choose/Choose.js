import React from 'react';

const Choose = (props) => {
   const { select, randomClick } = props;
   return (
      <div>
         <div>
            <h4>You can Choose: {select.name}</h4>
         </div>
       <button onClick={()=>randomClick()} className="btn btn-outline-info me-2">Select one</button>
     </div>
   );
};

export default Choose;