import { useState } from 'react'
import { Homepage } from './pages/Homepage'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import BeginnerChoice from './pages/BeginnerChoice';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/choose" element={<BeginnerChoice />} />
      </Routes>
    </>
  )
}

export default App
