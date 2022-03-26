import React from 'react';

const Choose = (props) => {
   const { select, randomClick } = props;
   return (
     <div>
       <div>
         <h5 className="text-black">
           <span className='text-primary'>You can Choose: {select.name}</span>
         </h5>
       </div>
       <button
         onClick={() => randomClick()}
         className="btn btn-outline-info mb-2"
       >
         Select one
       </button>
     </div>
   );
};

export default Choose;