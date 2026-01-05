import React from 'react';
import { Star, User, ExternalLink, FileText, Quote, Sparkles } from 'lucide-react';

export default function Reviews() {
  // 1. DATA: Reviews
  const reviews = [
    {
      id: 1,
      name: "Dr. Elena Roberts",
      role: "Academic Author",
      text: "The developmental edit was transformative. They didn't just fix commas; they helped clarify my entire central argument.",
      stars: 5
    },
    {
      id: 2,
      name: "Marcus Thorne",
      role: "Fantasy Novelist",
      text: "I was struggling with writer's block on my sequel. The ghostwriting team stepped in and perfectly captured the voices of my characters.",
      stars: 5
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Startup Founder",
      text: "LumiWriters handled the copywriting for our entire website launch. The tone was professional yet engaging.",
      stars: 5
    }
  ];

  // 2. DATA: Portfolio Samples
  const portfolio = [
    {
      id: 1,
      title: "The Future of Sustainable Energy",
      category: "Ghostwriting / Article",
      description: "A 1,500-word thought leadership article written for a CEO in the renewable energy sector. Focuses on actionable insights for 2025.",
      link: "#"
    },
    {
      id: 2,
      title: "Neon Horizon: Chapter 1",
      category: "Fiction Sample",
      description: "An opening chapter for a Cyberpunk novel. Demonstrates ability to build atmosphere, dialogue, and pacing.",
      link: "#" 
    },
    {
      id: 3,
      title: "TechFlow Landing Page",
      category: "Copywriting",
      description: "Full website copy for a SaaS startup. Increased sign-up conversion by 40% within the first month of launch.",
      link: "#" 
    },
    {
      id: 4,
      title: "Mental Health in the Workplace",
      category: "Blog Post",
      description: "SEO-optimized content designed to rank for specific keywords while providing genuine value to HR professionals.",
      link: "#" 
    }
  ];

  return (
    <div className="animate-fade">
      {/* --- SECTION 1: REVIEWS (Top Half) --- */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="hero-badge">Testimonials</span>
        <h1 style={{ marginBottom: '1rem', fontSize: '3rem' }}>Client Stories</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Real words from the writers we've helped find their voice.
        </p>
      </div>

      <div className="reviews-split-container" style={{ borderRadius: '24px' }}>
        {/* Left: Image with Overlay Icon */}
        <div className="reviews-image-side" style={{ position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=80" 
            alt="Person writing in a notebook" 
          />
          <div style={{ 
            position: 'absolute', 
            top: '20px', 
            left: '20px', 
            background: 'var(--white)', 
            padding: '12px', 
            borderRadius: '50%',
            boxShadow: 'var(--shadow)'
          }}>
            <Quote size={24} color="var(--accent)" />
          </div>
        </div>

        {/* Right: Review List */}
        <div className="reviews-content-side">
          {reviews.map((r) => (
            <div key={r.id} className="review-item">
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="#d35400" color="#d35400" />
                ))}
              </div>
              <div className="review-text" style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>"{r.text}"</div>
              <div className="review-author" style={{ gap: '15px' }}>
                <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '50%' }}>
                  <User size={20} color="var(--primary)" />
                </div>
                <div style={{ fontSize: '1.1rem' }}>
                  {r.name} <span style={{ fontWeight: 'normal', color: '#888', fontSize: '0.9em', display: 'block' }}>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 2: PORTFOLIO (Bottom Half) --- */}
      <div className="portfolio-section" style={{ marginTop: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="hero-badge">Our Work</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Selected Works</h2>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            A collection of pieces demonstrating our versatility across different tones and formats.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <div key={item.id} className="portfolio-card" style={{ borderRadius: '16px' }}>
              <div className="portfolio-content" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span className="portfolio-tag" style={{ margin: 0 }}>{item.category}</span>
                  <Sparkles size={18} color="#e0dcd5" />
                </div>
                <h3 className="portfolio-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p className="portfolio-desc" style={{ lineHeight: '1.7' }}>{item.description}</p>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ padding: '1.5rem 2rem' }}>
                Read Sample <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
