import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React HOC
        </p>
      </header>
      <Input type='number' placeholder='Insert a number' autofocus={true}/>
    </div>
  );
}

export default App;
