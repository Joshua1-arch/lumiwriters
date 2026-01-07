import React from 'react';
import { 
  ArrowRight, BookOpen, Star, CheckCircle, Heart, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple Icons
const SelarIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>;
const AmazonIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 7.5c-3.5 0-6.5 2.5-6.5 6s3 6 6.5 6c2.5 0 4.5-1.5 5.5-3.5.5-1 1-1.5 2-1.5.5 0 1 .5 1 1 0 1.5-2 3.5-3.5 4.5-1.5 1-3.5 1.5-5.5 1.5-5 0-9-4-9-9s4-9 9-9c2.5 0 4.5.5 6 2 .5.5.5 1.5 0 2-.5.5-1.5.5-2 0-1-1-2.5-1.5-4-1.5z"/></svg>;

const Home = () => {
  return (
    <div className="animate-fade">
      
      {/* 1. HERO SECTION (Split Screen) */}
      <section className="sales-hero">
        <div className="hero-container">
          
          {/* Left: The Book (Visual) */}
          <div className="hero-book-side">
            <img 
              src="/Grace.jpeg" 
              alt="Grace Unspeakable Book Cover" 
              className="hero-book-img"
            />
          </div>

          {/* Right: The Pitch (Sales) */}
          <div className="hero-text-side">
            <span className="hero-badge">Now Available</span>
            <h1 className="hero-title">Grace Unspeakable</h1>
            <p className="hero-subtitle">A Memoir of Faith, Survival, and Service</p>
            
            <div className="hero-desc">
              <p>
                <strong>Goddy Jedy-Agba</strong> faced a life-threatening illness that changed everything. 
                This is the extraordinary story of his survival, his deep-rooted faith, and the profound 
                grace that redefined his purpose.
              </p>
            </div>

            {/* --- NEW: PRICING DISPLAY --- */}
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '1px' }}>Hardcopy</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2c3e50' }}>₦22,000</span>
              </div>
              <div style={{ width: '1px', height: '40px', background: '#ddd' }}></div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '1px' }}>Ebook</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2c3e50' }}>₦18,000</span>
              </div>
            </div>

            {/* Buy Buttons */}
            <div className="buy-buttons-container">
              <a href="#" className="main-buy-btn">
                <SelarIcon /> Order on Selar (Nigeria)
              </a>
              
              <div className="secondary-buttons">
                <a href="#" className="sec-btn">
                  <AmazonIcon /> Amazon
                </a>
                <a href="#" className="sec-btn">
                  <BookOpen size={20} /> Kobo
                </a>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
              {/* <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--primary)' }}>5.0 Reader Rating</span>
              </div> */}
              <Link to="/reviews" className="btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem', border: '1px solid #ddd' }}>
                Read Reviews
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE HOOK: What's Inside? */}
      <section className="hook-section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why You Need To Read This Book</h2>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            More than just a biography, this is a roadmap for navigating life's darkest valleys.
          </p>

          <div className="hook-grid">
            <div className="hook-item">
              <Shield size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3>Resilience</h3>
              <p>Discover the mental and spiritual fortitude required to face a terminal diagnosis and emerge stronger.</p>
            </div>
            <div className="hook-item">
              <Heart size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3>Faith</h3>
              <p>Witness how deep-rooted spirituality can anchor you when the storms of life try to sweep you away.</p>
            </div>
            <div className="hook-item">
              <CheckCircle size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3>Leadership</h3>
              <p>Lessons on service, integrity, and mentorship from a distinguished public servant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUTHOR TEASER */}
      <section style={{ background: 'var(--primary)', color: 'white', padding: '5rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>About the Author</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 2rem auto', fontSize: '1.2rem', opacity: '0.9' }}>
            Goddy Jedy-Agba shares his journey not for applause, but to be a beacon of hope for anyone struggling to find light in the darkness.
          </p>
          <Link to="/about" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
            Read Full Bio <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: '#fdfbf7' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Begin The Journey Today</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>Available in Hardcopy (₦22,000) and eBook (₦18,000).</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Buy Now on Selar</a>
          <a href="#" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Get on Amazon</a>
        </div>
      </section>

    </div>
  );
};

export default Home;