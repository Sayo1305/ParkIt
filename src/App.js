import './App.css';
import React from 'react'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Addparking from './pages/Addparking';
function App() {

  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AddParking' element={<Addparking/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
