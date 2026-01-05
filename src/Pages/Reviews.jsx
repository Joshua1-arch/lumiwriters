import React from 'react';
import { Star, User, ExternalLink, FileText } from 'lucide-react';

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
      link: "#" // Replace with real link
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
    <div>
      {/* --- SECTION 1: REVIEWS (Top Half) --- */}
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Client Stories</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>
        Real words from the writers we have worked with.
      </p>

      <div className="reviews-split-container">
        {/* Left: Image */}
        <div className="reviews-image-side">
          <img 
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=80" 
            alt="Person writing in a notebook" 
          />
        </div>

        {/* Right: Review List */}
        <div className="reviews-content-side">
          {reviews.map((r) => (
            <div key={r.id} className="review-item">
              <div style={{ display: 'flex', gap: '4px', marginBottom: '0.5rem' }}>
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#d35400" color="#d35400" />
                ))}
              </div>
              <div className="review-text">"{r.text}"</div>
              <div className="review-author">
                <User size={18} />
                <div>
                  {r.name} <span style={{ fontWeight: 'normal', color: '#888', fontSize: '0.9em' }}>— {r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 2: PORTFOLIO (Bottom Half) --- */}
      <div className="portfolio-section">
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Selected Works</h2>
        <p style={{ textAlign: 'center', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          A collection of published pieces and samples demonstrating versatility across different tones and formats.
        </p>

        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div className="portfolio-content">
                <span className="portfolio-tag">{item.category}</span>
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-desc">{item.description}</p>
              </div>
              {/* This link goes to the external published work */}
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                Read Sample <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}