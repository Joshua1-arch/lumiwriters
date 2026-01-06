import React from 'react';
import { 
  PenTool, BookOpen, Sparkles, Quote, Feather, Star, CheckCircle, ArrowUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple SVG Icons for the buttons (No Tailwind)
const SelarIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight:'8px'}}><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>;
const AmazonIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight:'8px'}}><path d="M11.5 7.5c-3.5 0-6.5 2.5-6.5 6s3 6 6.5 6c2.5 0 4.5-1.5 5.5-3.5.5-1 1-1.5 2-1.5.5 0 1 .5 1 1 0 1.5-2 3.5-3.5 4.5-1.5 1-3.5 1.5-5.5 1.5-5 0-9-4-9-9s4-9 9-9c2.5 0 4.5.5 6 2 .5.5.5 1.5 0 2-.5.5-1.5.5-2 0-1-1-2.5-1.5-4-1.5z"/></svg>;
const KoboIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight:'8px'}}><path d="M4 4h4v16H4V4zm12 0h4v16h-4V4zM10 4h4v16h-4V4z"/></svg>;

const Home = () => {
  return (
    <div className="animate-fade">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        {/* Floating Icons */}
        <div className="floating-icon icon-1 animate-float"><Feather size={100} /></div>
        <div className="floating-icon icon-2 animate-float"><BookOpen size={80} /></div>
        <div className="floating-icon icon-3 animate-float"><Sparkles size={60} /></div>

        <div className="hero-content">
          {/* Badge */}
          <span className="hero-badge">Author • Speaker • Strategist</span>
          
          {/* Headline */}
          <h1>Stories of Faith, <br /> Survival & <span style={{color: 'var(--accent)'}}>Grace</span></h1>
          
          {/* Intro */}
          <p className="hero-intro">
            Welcome to the official portfolio of <strong>Goddy Jedy-Agba</strong>. 
            Discover my latest memoir, <em>Grace Unspeakable</em>, a narrative that captures 
            the profound resilience of the human spirit.
          </p>

          {/* SINGLE CTA BUTTON */}
          <div className="cta-group">
            <a href="#latest-book" className="btn btn-primary btn-large">
              Get My New Book <BookOpen size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. NEW BOOK SECTION: GRACE UNSPEAKABLE */}
      <section id="latest-book" className="book-section">
        <div className="container book-layout">
          
          {/* Left Side: Book Cover */}
          <div className="book-image-wrapper">
             <img src="/Grace.jpeg" alt="Grace Unspeakable Book Cover" />
          </div>

          {/* Right Side: Book Details */}
          <div className="book-content">
            <div className="new-release-badge">New Release</div>
            
            <div style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
              {[1,2,3,4,5].map((i) => <Star key={i} size={18} fill="var(--accent)" color="var(--accent)" />)}
            </div>

            <h2 className="book-title">Grace Unspeakable</h2>
            <p className="book-subtitle">A Memoir of Faith, Survival, and Service</p>

            <div className="book-description">
              <p>
                In <strong>Grace Unspeakable</strong>, Goddy Jedy-Agba shares an extraordinary journey of faith and resilience. 
                After a life-threatening illness, he experiences a profound grace that not only saves his life but also redefines his purpose.
              </p>
              <p>
                From valleys of personal loss to peaks of leadership, this story is a testament to the strength of the human spirit.
              </p>
            </div>

            <p style={{fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '1rem'}}>
              Available Now On:
            </p>

            <div className="book-buttons-grid">
              <a href="#" className="store-btn btn-selar">
                <SelarIcon /> Buy on Selar
              </a>
              <a href="#" className="store-btn btn-amazon">
                <AmazonIcon /> Amazon
              </a>
              <a href="#" className="store-btn btn-kobo">
                <KoboIcon /> Kobo
              </a>
            </div>

            <div style={{ marginTop: '2rem', borderTop: '1px solid #eeeeee', paddingTop: '1rem'}}>
              <Link to="/reviews" className="review-link-text">
                <CheckCircle size={18} />
                Already read it? <strong>Leave a review.</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* 4. FINAL CTA (Updated for Sales) */}
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2>Experience the Journey</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>Grab your copy of <em>Grace Unspeakable</em> today.</p>
        {/* Links back to the top purchase section */}
        <a href="#latest-book" className="btn btn-primary">
          Get Your Copy Today <ArrowUp size={18} />
        </a>
      </section>
    </div>
  );
};

export default Home;