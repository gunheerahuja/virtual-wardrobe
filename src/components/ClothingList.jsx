// ClothingList.js

import React from 'react';

const ClothingList = ({ items, onSelect }) => {
  return (
    <div className="clothing-list">
      {items.map((item) => (
        <div key={item.id} className="clothing-item" onClick={() => onSelect(item)}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ClothingList;
