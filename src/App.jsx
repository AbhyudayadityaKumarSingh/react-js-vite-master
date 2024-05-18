// src/App.jsx
import React, { useState } from 'react';
import ListView from './components/ListView.jsx';
import ProductView from './components/ProductView.jsx';
import './App.css'; // Make sure you have your styles

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="app">
      <nav>
        <button onClick={() => setSelectedBreed(null)}>Home</button>
      </nav>
      {selectedBreed ? (
        <ProductView breed={selectedBreed} onBack={() => setSelectedBreed(null)} />
      ) : (
        <ListView onSelectBreed={setSelectedBreed} />
      )}
    </div>
  );
};

export default App;
