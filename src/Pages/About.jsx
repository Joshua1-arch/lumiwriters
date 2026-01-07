import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, Clock, CheckCircle, Send, Linkedin, Twitter, Instagram,
  AlertCircle, BookOpen, Award, User
} from 'lucide-react';

export default function About() {
  const form = useRef();
  // Simple state to handle form submission
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('submitting');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID', 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID', 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
    )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
      });
  };

  return (
    <div className="animate-fade">
      
      {/* --- PART 1: ABOUT THE AUTHOR (Replaced Section) --- */}
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '6rem' }}>
        
        {/* Left: Author Image */}
        <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            {/* Placeholder for Author Image - Add 'Author.jpg' to your public folder */}
            <img 
              src="/Author.jpg" 
              alt="Goddy Jedy-Agba" 
              style={{ 
                width: '100%', 
                borderRadius: '12px', 
                boxShadow: 'var(--shadow)',
                objectFit: 'cover',
                aspectRatio: '3/4',
                background: '#eee' // Fallback color if image missing
              }} 
            />
            <div style={{ 
              position: 'absolute', 
              bottom: '-20px', 
              right: '-20px', 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '12px',
              boxShadow: 'var(--shadow)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Award size={32} color="var(--accent)" />
              <div>
                <strong style={{ display: 'block', color: 'var(--primary)' }}>Distinguished</strong>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>Leader & Author</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Author Bio */}
        <div style={{ flex: '1 1 400px' }}>
          <span className="hero-badge">The Author</span>
          <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem', lineHeight: '1.2' }}>Goddy Jedy-Agba</h1>
          
          <div style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Goddy Jedy-Agba</strong> is a distinguished public servant, leader, and a testament to the power of resilience. With a career defined by service and integrity, he has touched countless lives through his leadership and mentorship.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              In his memoir, <em>Grace Unspeakable</em>, he steps beyond his public persona to share a deeply personal journey. After facing a life-threatening illness that tested his physical and spiritual limits, he emerged with a renewed sense of purpose and a profound understanding of divine grace.
            </p>
            <p>
              He writes not just to tell his story, but to inspire others navigating their own valleys of uncertainty. His life is a living evidence that with faith, gratitude, and the support of loved ones, the human spirit can overcome insurmountable odds.
            </p>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={20} color="var(--accent)" />
              <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Memoirist</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <User size={20} color="var(--accent)" />
              <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Public Servant</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 2: CONTACT SECTION --- */}

    </div>
  );
}