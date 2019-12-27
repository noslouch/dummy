import React from 'react';
import './App.css';
import Header from './components/Header';

const StyledHeader = Header.decorators.Theme(Header)

function App() {
  return (
    <div className="App">
      <StyledHeader/>
    </div>
  );
}

export default App;
