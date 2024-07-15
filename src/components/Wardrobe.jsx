import React from 'react';


const Wardrobe = ({ wardrobe, onSelect }) => {
  return (
    <div className="wardrobe">
      <h2>Your Wardrobe</h2>
      {wardrobe.map((item) => (
        <div key={item.id} className="wardrobe-item" onClick={() => onSelect(item)}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Wardrobe;
