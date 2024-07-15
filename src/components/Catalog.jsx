import React from 'react';

const Catalog = ({ onSelectItem }) => {
  const items = [
    { id: 1, name: 'T-Shirt', image: 'https://e7.pngegg.com/pngimages/3/819/png-clipart-printed-t-shirt-polo-shirt-clothing-t-shirt-tshirt-fashion-thumbnail.png', model: 'path/to/tshirt.gltf' },
    { id: 2, name: 'Jeans', image: 'https://png.pngtree.com/png-clipart/20220101/ourmid/pngtree-blue-men-s-jeans-in-back-views-isolated-png-and-psd-png-image_4142530.png', model: 'path/to/jeans.gltf' },
    
  ];

  return (
    <div className="catalog">
      {items.map((item) => (
        <div key={item.id} className="catalog-item" onClick={() => onSelectItem(item)}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
