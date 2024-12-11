import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/about">Haqqında</Link></li>
            <li><Link to="/work">İş nümunələri</Link></li>
            <li><Link to="/contact">Əlaqə məlumatları</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<h1>Əsas Səhifə</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
