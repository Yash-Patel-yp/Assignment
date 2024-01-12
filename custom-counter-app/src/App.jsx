import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    const newCounter = { id: Date.now() };
    setCounters((prevCounters) => [...prevCounters, newCounter]);
  };

  const deleteCounter = (id) => {
    setCounters((prevCounters) =>
      prevCounters.filter((counter) => counter.id !== id)
    );
  };

  return (
    <div className="app">
      <header className="header">
        <button className="header-button" onClick={addCounter}>
          Add Counter
        </button>
      </header>
      {counters.length === 0 && (
        <p>Click on Add Counter below the Add Counter button.</p>
      )}
      <div className="content">
        {counters.map((counter) => (
          <Counter key={counter.id} id={counter.id} onDelete={deleteCounter} />
        ))}
      </div>
    </div>
  );
}

export default App;
