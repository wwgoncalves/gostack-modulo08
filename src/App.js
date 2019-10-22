import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storedTechs = localStorage.getItem('techs');

    if (storedTechs) {
      setTech(JSON.parse(storedTechs));
    }

    /*
    return () => {//code replaces componentWillUnmount routine}
    */
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(tech));

    /*
    return () => {//code replaces componentWillUnmount routine}
    */
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
