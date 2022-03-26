import React from 'react';

const RemoveItem = (props) => {
   const { removeList } = props;
   return (
     <div>
       <button onClick={()=>removeList()} className="btn btn-outline-info">Choose again</button>
     </div>
   );
};

export default RemoveItem;