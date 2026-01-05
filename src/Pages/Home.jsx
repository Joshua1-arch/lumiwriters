import React from 'react';
import { 
  PenTool, FileText, Send, ArrowRight, BookOpen, 
  Sparkles, Coffee, Quote, Feather
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        {/* Floating Background Icons */}
        <div className="floating-icon icon-1 animate-float"><Feather size={100} /></div>
        <div className="floating-icon icon-2 animate-float"><PenTool size={80} /></div>
        <div className="floating-icon icon-3 animate-float"><Sparkles size={60} /></div>

        <div className="hero-content">
          <span className="hero-badge">Expert Storytelling & Strategy</span>
          <h1>Turning Bold Ideas <br /> Into <span style={{color: 'var(--accent)'}}>Timeless</span> Words</h1>
          
          <p className="hero-intro">
            LumiWriters is a boutique creative studio dedicated to the art of the written word. 
            We don't just write; we architect narratives that capture hearts and command attention.
          </p>

          <div className="cta-group">
            <Link to="/about" className="btn btn-primary btn-large">
              Start Your Project <Send size={18} />
            </Link>
            <Link to="/reviews" className="btn btn-outline btn-large">
              Read Success Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-item">
            <h2>500+</h2>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item">
            <h2>15+</h2>
            <p>Bestsellers Ghostwritten</p>
          </div>
          <div className="stat-item">
            <h2>100%</h2>
            <p>Human Content</p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="services-section">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          What We Craft
        </h2>
        <p style={{ textAlign: 'center', color: '#888', marginBottom: '3rem', fontFamily: 'sans-serif' }}>
          Specialized writing services for authors, executives, and brands.
        </p>

        <div className="services-grid">
          <div className="card service-card">
            <div style={{ background: '#fff5f0', padding: '1rem', borderRadius: '12px' }}>
              <PenTool size={36} color="#d35400" strokeWidth={1.5} />
            </div>
            <h3>Ghostwriting</h3>
            <p>
              We adopt your voice to create compelling books, memoirs, and articles that sound exactly like you—only polished to perfection.
            </p>
          </div>

          <div className="card service-card">
            <div style={{ background: '#fff5f0', padding: '1rem', borderRadius: '12px' }}>
              <FileText size={36} color="#d35400" strokeWidth={1.5} />
            </div>
            <h3>Copywriting</h3>
            <p>
              Strategic copy for landing pages, websites, and high-stakes emails designed to build trust and drive conversions.
            </p>
          </div>

          <div className="card service-card">
            <div style={{ background: '#fff5f0', padding: '1rem', borderRadius: '12px' }}>
              <Sparkles size={36} color="#d35400" strokeWidth={1.5} />
            </div>
            <h3>Editorial Review</h3>
            <p>
              Deep developmental editing and line-by-line proofreading to transform your manuscript into a publishable masterpiece.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED QUOTE */}
      <section className="featured-quote">
        <Quote size={40} style={{ marginBottom: '2rem', opacity: 0.5 }} />
        <blockquote>
          "A professional writer is an amateur who didn’t quit. We provide the craftsmanship to ensure your persistence pays off."
        </blockquote>
        <cite>— The LumiWriters Mission</cite>
      </section>

      {/* 4. FINAL CTA */}
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2>Ready to tell your story?</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>Let's collaborate on something extraordinary.</p>
        <Link to="/about" className="btn btn-primary">
          Get a Free Consultation <Coffee size={18} />
        </Link>
      </section>
    </div>
  );
};

export default Home;