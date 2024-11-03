import React, { useState, useEffect } from 'react';

const Component = () => {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem('names'));
    if (storedNames) {
      setNames(storedNames);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  const addName = () => {
    if (name.trim()) {
      setNames([...names, name]);
      setName('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addName();
    }
  };

  return (
    <div className="app">
      <h1>Список имён</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        onKeyPress={handleKeyPress}
        placeholder="Введите имя" 
      />
      <button onClick={addName}>Добавить имя</button>
      <ul>
        {names.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
