import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Feather, Menu, X } from 'lucide-react';
import Home from './Pages/Home';
import Reviews from './Pages/Reviews';
import About from './Pages/About';
import './App.css';

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="App">
      <nav>
        <Link to="/" className="logo" onClick={closeMenu}>
          <Feather size={24} /> LumiWriters
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/reviews" onClick={closeMenu}>Reviews</Link>
          <Link to="/about" onClick={closeMenu}>About The Author</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <footer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <Feather size={16} color="var(--accent)" />
          <p>&copy; {new Date().getFullYear()} LumiWriters. Crafted for wordsmiths.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;