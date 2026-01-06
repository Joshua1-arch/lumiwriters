import React from 'react';
import { Star, User, BookOpen } from 'lucide-react';

export default function Reviews() {
  // 1. DATA: Reviews
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
    <div className="animate-fade">
      
      {/* --- HEADER --- */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="hero-badge">Reader Acclaim</span>
        <h1 style={{ marginBottom: '1rem', fontSize: '3rem' }}>What People Are Saying</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
          Feedback on <em>Grace Unspeakable: A Memoir of Faith, Survival, and Service</em>.
        </p>
      </div>

      {/* --- REVIEWS SECTION --- */}
      <div className="reviews-split-container" style={{ borderRadius: '24px' }}>
        
        {/* Left: FRONT COVER IMAGE */}
        <div className="reviews-image-side" style={{ position: 'relative' }}>
          {/* Make sure your image is named Grace.jpeg in the public folder */}
          <img 
            src="/Grace.jpeg" 
            alt="Grace Unspeakable Front Cover" 
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
            <BookOpen size={24} color="var(--accent)" />
          </div>
        </div>

        {/* Right: Review List */}
        <div className="reviews-content-side">
          {reviews.map((r) => (
            <div key={r.id} className="review-item">
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--accent)" color="var(--accent)" />
                ))}
              </div>
              <div className="review-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>"{r.text}"</div>
              <div className="review-author" style={{ gap: '15px' }}>
                <div style={{ background: '#ffffff', border: '1px solid #eeeeee', padding: '10px', borderRadius: '50%' }}>
                  <User size={20} color="var(--primary)" />
                </div>
                <div style={{ fontSize: '1rem' }}>
                  {r.name} <span style={{ fontWeight: 'normal', color: 'var(--text-light)', fontSize: '0.9em', display: 'block' }}>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}