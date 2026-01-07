import React from 'react';
import { Star, User, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Reader Review",
      role: "Verified Purchase",
      text: "A poignant and inspiring memoir. It reminds us that even in our darkest moments, grace can guide us to a life rich with purpose.",
      stars: 5
    },
    {
      id: 2,
      name: "Marcus Thorne",
      role: "Literary Critic",
      text: "Goddy Jedy-Agba reflects on the enduring influence of his parents and mentors. A testament to the strength of the human spirit.",
      stars: 5
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Editor",
      text: "An extraordinary journey of faith and resilience. The storytelling captivates you from the very first page.",
      stars: 5
    }
  ];

  return (
    <div className="animate-fade reviews-page-wrapper">
      
      {/* 1. CENTERED HERO: The Book */}
      <div className="book-showcase-hero">
        <span className="showcase-badge">Bestselling Memoir</span>
        
        {/* Book Image */}
        <div style={{ margin: '2rem 0' }}>
          <img 
            src="/Grace.jpeg" 
            alt="Grace Unspeakable Book Cover" 
            className="book-showcase-img"
          />
        </div>

        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>
          Grace Unspeakable
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          See why readers across the country are finding hope and resilience in this extraordinary story.
        </p>
      </div>

      {/* 2. GRID: The Reviews */}
      <div className="modern-reviews-grid">
        {reviews.map((r) => (
          <div key={r.id} className="modern-review-card">
            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
              {[...Array(r.stars)].map((_, i) => (
                <Star key={i} size={18} fill="var(--accent)" color="var(--accent)" />
              ))}
            </div>

            {/* Quote Icon */}
            <Quote size={24} color="#e0dcd5" style={{ marginBottom: '1rem' }} />

            {/* Text */}
            <p className="modern-review-text">
              "{r.text}"
            </p>

            {/* Author */}
            <div className="modern-review-footer">
              <div className="modern-avatar">
                <User size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{r.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#999' }}>{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}