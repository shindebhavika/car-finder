import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import BackToTopButton from './components/BackToTopButton';
import Navbar from './components/Navbar';

import CarDetail from './components/CarDetail';

function App() {
  return (
    <div>

  <Navbar/>

      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/my-fav" element={<CarDetail/>}></Route>
        </Routes>
      </Router>

      <BackToTopButton/>
    </div>
  )
}

export default App
