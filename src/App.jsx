import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Header from './component/header/header';

import Home from './pages/home/home';
import Footer from './component/footer/footer';

function App() {

  return (
    <BrowserRouter>
    <div className="container">
      <div className="main">
        <Header/>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
