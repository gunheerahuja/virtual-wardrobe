// src/components/ClothingItem.js
import React from 'react';

const ClothingItem = ({ item, onSelect }) => (
  <div className="clothing-item" onClick={() => onSelect(item)}>
    <img src={item.image} alt={item.name} />
    <p>{item.name}</p>
  </div>
);

export default ClothingItem;
