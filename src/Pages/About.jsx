import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Users, Target, Coffee, 
  Mail, Clock, CheckCircle, Send, Linkedin, Twitter, Instagram,
  AlertCircle
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
      {/* --- PART 1: ABOUT US (Philosophy) --- */}
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '6rem' }}>
        <div style={{ flex: '1 1 400px' }}>
          <span className="hero-badge">Our Story</span>
          <h1 style={{marginBottom: '1.5rem', fontSize: '3rem'}}>Words That Resonate</h1>
          <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
            At <strong>LumiWriters</strong>, we believe words have the power to change the world. 
            Founded in Lagos in 2024, our mission is to help writers articulate their deepest thoughts with clarity and grace.
          </p>
          <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
            We are a collective of humans who love books, grammar, and the delicate art of storytelling. No AI, just pure craftsmanship.
          </p>
        </div>

        <div style={{ flex: '1 1 300px', display: 'grid', gap: '1.5rem' }}>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem', borderRadius: '16px' }}>
            <div style={{ background: '#fff5f0', padding: '1rem', borderRadius: '12px' }}>
              <Users size={32} color="#d35400" />
            </div>
            <div><strong style={{fontSize: '1.1rem'}}>Expert Team</strong><br/><small style={{color: '#888'}}>Veterans of the industry</small></div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem', borderRadius: '16px' }}>
            <div style={{ background: '#fff5f0', padding: '1rem', borderRadius: '12px' }}>
              <Target size={32} color="#d35400" />
            </div>
            <div><strong style={{fontSize: '1.1rem'}}>Precision</strong><br/><small style={{color: '#888'}}>Zero compromise on quality</small></div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem', borderRadius: '16px' }}>
            <div style={{ background: '#fff5f0', padding: '1rem', borderRadius: '12px' }}>
              <Coffee size={32} color="#d35400" />
            </div>
            <div><strong style={{fontSize: '1.1rem'}}>Passion</strong><br/><small style={{color: '#888'}}>Fueled by creativity</small></div>
          </div>
        </div>
      </div>

      {/* --- PART 2: CONTACT SECTION --- */}
      <div className="contact-section">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Let's Start Your Project</h2>
        
        <div className="contact-split">
          
          {/* Left: Contact Info & Availability */}
          <div className="contact-info">
            <h3 style={{ marginTop: 0, fontSize: '1.8rem' }}>Get in Touch</h3>
            <p style={{ marginBottom: '2.5rem', color: '#666', fontSize: '1.1rem' }}>
              Have a book idea? Need copy for your website? Fill out the form, and let's discuss how we can help.
            </p>

            <div className="contact-item">
              <div style={{ background: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <Mail size={20} color="#d35400" />
              </div>
              <span style={{fontWeight: 'bold'}}>hello@lumiwriters.com</span>
            </div>
            
            {/* Social Media Links */}
            <div className="social-links">
              <a href="#" className="social-icon"><Linkedin size={28} /></a>
              <a href="#" className="social-icon"><Twitter size={28} /></a>
              <a href="#" className="social-icon"><Instagram size={28} /></a>
            </div>

            {/* Availability Box */}
            <div className="status-box" style={{ background: '#fff', border: '1px solid #e0dcd5', boxShadow: 'var(--shadow)' }}>
              <div className="status-row" style={{ color: '#27ae60' }}>
                <CheckCircle size={20} /> Currently Accepting New Clients
              </div>
              <div className="contact-item" style={{ fontSize: '0.95rem', margin: 0, gap: '10px', color: '#888' }}>
                <Clock size={16} /> Typical response time: <strong>24 Hours</strong>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-container" style={{ borderRadius: '20px', padding: '3rem' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div className="animate-float" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                  <CheckCircle size={64} color="#27ae60" />
                </div>
                <h3 style={{fontSize: '1.8rem'}}>Message Sent!</h3>
                <p style={{color: '#666'}}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')} style={{ marginTop: '2rem' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input name="user_name" type="text" className="form-input" placeholder="Your full name" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input name="user_email" type="email" className="form-input" placeholder="name@example.com" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Service Interested In</label>
                  <select name="service" className="form-input" style={{ background: 'white' }}>
                    <option>Ghostwriting</option>
                    <option>Copywriting</option>
                    <option>Editing / Proofreading</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details</label>
                  <textarea name="message" className="form-textarea" placeholder="Tell us a little about what you are writing..." required></textarea>
                </div>

                {status === 'error' && (
                  <div style={{ color: '#e74c3c', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px', background: '#fdf2f2', padding: '10px', borderRadius: '8px' }}>
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}