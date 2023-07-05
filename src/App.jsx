import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Header from './component/header/header';

import Home from './pages/home/home';
import Footer from './component/footer/footer';
import Profile from './pages/user/profile';
import History from './pages/user/history';

function App() {

  return (
    <BrowserRouter>
    <div className="container">
      <div className="main">
        <Header/>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/user-info' element={<Navigate to='/user-info/profile' />} />
          <Route path='/user-info/profile' element={<Profile/>} />
          <Route path='/user-info/history' element={<History/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
