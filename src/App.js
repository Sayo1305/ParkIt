import './App.css';
import React from 'react'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Addparking from './pages/Addparking';
import BuyParking from './pages/BuyParking';
function App() {

  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AddParking' element={<Addparking/>}></Route>
        <Route path='/BuyParking' element={<BuyParking/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
