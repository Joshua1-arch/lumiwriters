import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react'; // Updated imports
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
        {/* UPDATED LOGO SECTION */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <BookOpen size={24} color="var(--accent)" />
          <span style={{ marginLeft: '5px' }}>Grace Unspeakable</span>
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

      {/* Main Content Area - Padding handled by App.css container if needed */}
      <div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* UPDATED FOOTER */}
      <footer>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
            &copy; {new Date().getFullYear()} Goddy Jedy-Agba. All rights reserved.
          </p>
          <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>
            Grace Unspeakable: A Memoir of Faith, Survival, and Service.
          </p>
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