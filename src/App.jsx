import React, { useState } from 'react';
import Header from './components/Header';
import Catalog from './components/Catalog';
import TryOnView from './components/TryOnView';
import ClothingList from './components/ClothingList';
import ContinueButton from './components/ContinueButton';
import VirtualTryOn from './components/VirtualTryOn';
import UserProfile from './components/UserProfile';
import Wardrobe from './components/Wardrobe';
import pinktop from './components/pink top.jpg';
import top from './components/top.png'
import blacktop from './components/blacktop.jpg';
import './styles.css';
import './App.css';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [user] = useState({ name: 'John Doe', email: 'john.doe@example.com' });
  const [wardrobe] = useState([
    { id: 1, name: 'Tank tops', image: pinktop, model: 'path/to/tshirt.gltf' },
    { id: 2, name: 'Jeans', image: 'https://e7.pngegg.com/pngimages/830/804/png-clipart-blue-denim-pants-topshop-mom-jeans-denim-slim-fit-pants-jeans-fashion-top-thumbnail.png', model: 'path/to/jeans.gltf' },
    { id: 3, name: 'Formal Wear', image: blacktop, model: 'path/to/tshirt.gltf' },
    { id: 4, name: 'Cardigan', image: 'https://w7.pngwing.com/pngs/602/71/png-transparent-cardigan-beige-wool-kitsch-woolen-cardigan-jacket-thumbnail.png', model: 'path/to/jeans.gltf' },
    { id: 5, name: 'Sweater', image: 'https://static.vecteezy.com/system/resources/previews/036/114/258/non_2x/ai-generated-isolated-sweater-fashion-piece-of-clothing-on-a-transparent-background-file-format-png.png', model: 'path/to/tshirt.gltf' },
    { id: 6, name: 'Tops', image: top , model: 'path/to/jeans.gltf' },
    
  ]);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleAddToWardrobe = (item) => {
    setWardrobe([...wardrobe, item]);
  };

  return (
    <div className="App">
      <Header />
      <Catalog onSelectItem={handleSelectItem} />
      {selectedItem && <TryOnView selectedItem={selectedItem} />}
      <ClothingList items={wardrobe} onSelect={handleSelectItem} />
      <UserProfile user={user} />
      <Wardrobe wardrobe={wardrobe} onSelect={handleSelectItem} />
      <ContinueButton />
    </div>
  );
};

export default App;
