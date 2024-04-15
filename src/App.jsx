import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/' element={<AllPlayers />} />
          <Route path='/players/:id' element={<SinglePlayer />} />
          <Route path="/players/new" element={<NewPlayer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;