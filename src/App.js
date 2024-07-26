import React from 'react';
import ProjectsList from './components/ProjectsList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <ProjectsList />
      </main>
    </div>
  );
};

export default App;
