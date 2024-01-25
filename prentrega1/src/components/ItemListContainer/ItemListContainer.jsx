import React from 'react';

const ItemListContainer = ({greeting}) => {
   
  return (
    <>   
      <div className='containerStyle'>
        <button className='greetingStyle'>{greeting}</button>
      </div>
     </>
  );
};

export default ItemListContainer;


