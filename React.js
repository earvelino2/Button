import React, { useState } from 'react';
import './App.css'; // Arquivo de estilo CSS para estilização

function NavBar() {
  const [selectedItem, setSelectedItem] = useState('Home');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <nav>
      <ul>
        <li className={selectedItem === 'Home' ? 'selected' : ''} onClick={() => handleItemClick('Home')}>Home</li>
        <li className={selectedItem === 'About' ? 'selected' : ''} onClick={() => handleItemClick('About')}>About</li>
        <li className={selectedItem === 'Services' ? 'selected' : ''} onClick={() => handleItemClick('Services')}>Services</li>
        <li className={selectedItem === 'Contact' ? 'selected' : ''} onClick={() => handleItemClick('Contact')}>Contact</li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Conteúdo da Página</h1>
    </div>
  );
}

export default App;
