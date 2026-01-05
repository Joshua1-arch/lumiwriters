import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Feather } from 'lucide-react';
import Home from './Pages/Home';
import Reviews from './Pages/Reviews';
import About from './Pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className="logo">
            <Feather size={24} /> LumiWriters
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/about">About Us</Link>
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
          <p>&copy; {new Date().getFullYear()} LumiWriters. Crafted for wordsmiths.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;