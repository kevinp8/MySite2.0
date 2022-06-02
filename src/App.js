import './reset.css'
import './App.css';
import React from 'react'
import Top from './components/Top';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
      <Top/>
      <Nav/>
    </div>
  )
}

export default App