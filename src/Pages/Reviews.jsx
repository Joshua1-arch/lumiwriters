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
      
      {/* --- SECTION 1: REVIEWS (Top Half - Front Cover) --- */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="hero-badge">Reader Acclaim</span>
        <h1 style={{ marginBottom: '1rem', fontSize: '3rem' }}>What People Are Saying</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
          Feedback on <em>Grace Unspeakable: A Memoir of Faith, Survival, and Service</em>.
        </p>
      </div>

      <div className="reviews-split-container" style={{ borderRadius: '24px' }}>
        {/* Left: FRONT COVER IMAGE */}
        <div className="reviews-image-side" style={{ position: 'relative' }}>
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

      {/* --- SECTION 2: BOOK SYNOPSIS (Back Cover Content) --- */}
      {/* Added 'reverse-layout' class here instead of inline style */}
      <div className="reviews-split-container reverse-layout" style={{ marginTop: '4rem', marginBottom: '4rem', borderRadius: '24px' }}>
        
        {/* Right (on Desktop) / Top (on Mobile): BACK COVER IMAGE */}
        <div className="reviews-image-side">
          <img 
            src="/Back.jpg" 
            alt="Grace Unspeakable Back Cover Blurb" 
          />
        </div>

        {/* Left (on Desktop) / Bottom (on Mobile): SYNOPSIS TEXT */}
        <div className="reviews-content-side">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>About the Memoir</h2>
          
          <div style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.8', fontFamily: 'Georgia, serif' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>In <em>Grace Unspeakable</em></strong>, Goddy Jedy-Agba shares an extraordinary journey of faith and resilience. 
              After a life-threatening illness, he experiences a profound grace that not only saves his life but also redefines his purpose. 
              With gratitude as his compass, he offers timeless wisdom and inspiration for others facing life’s challenges.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              From valleys of personal loss and struggle to peaks of leadership and service, Jedy-Agba reflects on the enduring influence 
              of his parents, the wisdom of revered mentors, and his deep-rooted faith in God.
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 'bold' }}>
              "This memoir is a testament to the boundless possibilities that arise when we trust in divine grace."
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}