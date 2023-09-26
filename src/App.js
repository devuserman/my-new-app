import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LogementPage from './components/LogementPage/LogementPage';
import NotFound from './components/NotFound/NotFound.js';
import Apropos from './components/Apropos/Apropos'; 
import './App.css';

function App() {
  return (
    <div className="App">
   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a_propos" element={<Apropos />} />
          <Route path="/logement/:id" element={<LogementPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
