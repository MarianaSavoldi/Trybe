import logo from './logo.svg';
import './App.css';
import React from 'react'

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  console.log(task('teste'));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="task-test">
          {task('Estou')}
          {task('aprendendo')}
          {task('a usar')}
          {task('REACT')}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
