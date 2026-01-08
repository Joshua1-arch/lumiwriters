import React from 'react';
import { 
  ArrowRight, BookOpen, Star, CheckCircle, Heart, Shield, ShoppingBag
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
                <strong>Goddy Jedy-Agba, OFR</strong>, faced a life-threatening illness that changed everything. 
                This is the extraordinary story of his survival, his deep-rooted faith, and the profound 
                grace that redefined his purpose.
              </p>
            </div>

            {/* --- PRICING DISPLAY --- */}
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '1px' }}>Hardcopy</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2c3e50' }}>₦25,000</span>
              </div>
              <div style={{ width: '1px', height: '40px', background: '#ddd' }}></div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '1px' }}>Ebook</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2c3e50' }}>₦18,000</span>
              </div>
            </div>

            {/* Buy Buttons */}
            <div className="buy-buttons-container">
              {/* Primary: Selar */}
              <a href="https://selar.com/902j274843" className="main-buy-btn">
                <SelarIcon /> Order on Selar (Nigeria)
              </a>
              
              {/* Secondary Options */}
              <div className="secondary-buttons">
                {/* Rovingheights Button Added */}
                <a href="https://rhbooks.com.ng/product/grace-unspeakable-a-memoir/" className="sec-btn" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag size={20} /> Rovingheights
                </a>
                <a href="#" className="sec-btn">
                  <AmazonIcon /> Amazon
                </a>
                <a href="#" className="sec-btn">
                  <BookOpen size={20} /> Kobo
                </a>
              </div>
            </div>

            {/* <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#666' }}>
              <div style={{display:'flex'}}>{[1,2,3,4,5].map(i=><Star key={i} size={14} fill="#f1c40f" color="#f1c40f"/>)}</div>
              <span>Rated 5.0 by readers</span>
            </div> */}

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
              <Shield size={40} color="#d35400" style={{ marginBottom: '1rem' }} />
              <h3>Resilience</h3>
              <p>Discover the mental and spiritual fortitude required to face a terminal diagnosis and emerge stronger.</p>
            </div>
            <div className="hook-item">
              <Heart size={40} color="#d35400" style={{ marginBottom: '1rem' }} />
              <h3>Faith</h3>
              <p>Witness how deep-rooted spirituality can anchor you when the storms of life try to sweep you away.</p>
            </div>
            <div className="hook-item">
              <CheckCircle size={40} color="#d35400" style={{ marginBottom: '1rem' }} />
              <h3>Leadership</h3>
              <p>Lessons on service, integrity, and mentorship from a distinguished public servant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUTHOR TEASER */}
      <section style={{ background: '#1a2a3a', color: 'white', padding: '5rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Goddy Jedy-Agba, <span style={{opacity: 0.7}}>OFR</span></h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 2rem auto', fontSize: '1.2rem', opacity: '0.9', lineHeight: '1.6' }}>
            Former Minister of State for Power and seasoned technocrat with over 30 years of service. 
            A visionary leader dedicated to governance, agriculture, and the power of principled living.
          </p>
          <Link to="/about" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
            Learn More <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: '#fdfbf7' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Begin The Journey Today</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>Available in Hardcopy (₦25,000) and eBook (₦18,000).</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Buy Now on Selar</a>
          <a href="https://rhbooks.com.ng/product/grace-unspeakable-a-memoir/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Buy on Rovingheights</a>
        </div>
      </section>

    </div>
  );
};

export default Home;