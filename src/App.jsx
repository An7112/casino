import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Header from './component/header/header';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <div className="main">
        <Header/>
        <Routes>
          <Route path='/' element={<Navigate to='/overview' />} />
        </Routes>
        <div className='footer'></div>
        {/* <Footer /> */}
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
