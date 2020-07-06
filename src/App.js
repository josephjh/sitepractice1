import React from 'react';
import './App.css';
import TitleImage from './components/TitleImage/TitlePage';
import NavBar from './components/NavBar/NavBar';
import InfoBlock from './components/InfoBlock/InfoBlock';

function App() {
  return (
    <div className="App">
      <TitleImage />
      <NavBar />
      <InfoBlock />
    </div>
  );
}

export default App;
