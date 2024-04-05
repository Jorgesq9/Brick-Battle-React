import React from 'react';
import {Routes , Route} from 'react-router-dom'
import './index.css'

function App() {
  return (
    <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/game-over" element={<GameOverScreen />} />
        <Route path="/win" element={<WinScreen />}/>
    </Routes>
  );
}

export default App;
