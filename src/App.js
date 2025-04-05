import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div className="container">
      <h1>Dynamic List Manager</h1>
      <div className="input-group">
        <input
          type="text"
          value={input}
          placeholder="Enter an item"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="list-box">
        <ul>
          {items.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
