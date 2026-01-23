import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Ensure X is imported
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
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/Grace.png"
            alt="Grace Unspeakable"
            style={{
              height: '50px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Link>

        {/* MAIN TOGGLE (Visible on Navbar) */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {/* This switches icon based on state */}
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>

          {/* --- NEW ADDITION: Close Icon inside the menu --- */}
          <div className="mobile-menu-close-icon" onClick={closeMenu}>
            <X size={30} />
          </div>
          {/* ----------------------------------------------- */}

          <Link to="/" className="link-underline" onClick={closeMenu}>Home</Link>
          <Link to="/reviews" className="link-underline" onClick={closeMenu}>Reviews</Link>
          <Link to="/about" className="link-underline" onClick={closeMenu}>About The Author</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* Footer */}
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
