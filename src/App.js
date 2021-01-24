import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Contact';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact avatar="https://randomuser.me/api/portraits/women/17.jpg" name="Darlene MayMay"  online/>
      <Contact name="Annie Porter" avatar="https://randomuser.me/api/portraits/women/40.jpg"/>
      <Contact name="Jimmie Ortiz" avatar="https://randomuser.me/api/portraits/men/96.jpg" online/>
    </div>
  );
}

export default App;
