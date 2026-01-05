import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Users, Target, Coffee, // For About Section
  Mail, Clock, CheckCircle, Send, Linkedin, Twitter, Instagram // For Contact Section
} from 'lucide-react';

export default function About() {
  const form = useRef();
  // Simple state to handle form submission
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // These should ideally be in a .env file
    // emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
    
    // For now, we simulate the call with the actual library structure
    // Replace placeholders with your EmailJS credentials or use .env variables
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
    <div>
      {/* --- PART 1: ABOUT US (Philosophy) --- */}
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h1 style={{marginBottom: '1rem'}}>Our Philosophy</h1>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            At <strong>LumiWriters</strong>, we believe words have the power to change the world. 
            Founded in Lagos in 2024, our mission is to help writers articulate their deepest thoughts with clarity and grace.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We are not AI; we are humans who love books, grammar, and storytelling.
          </p>
        </div>

        <div style={{ flex: '1 1 300px', display: 'grid', gap: '1rem' }}>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
            <Users size={30} color="#2c3e50" />
            <div><strong>Expert Team</strong><br/><small>Veterans of the industry</small></div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
            <Target size={30} color="#2c3e50" />
            <div><strong>Precision</strong><br/><small>Zero compromise on quality</small></div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
            <Coffee size={30} color="#2c3e50" />
            <div><strong>Passion</strong><br/><small>Fueled by creativity</small></div>
          </div>
        </div>
      </div>

      {/* --- PART 2: CONTACT SECTION --- */}
      <div className="contact-section">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Let's Start Your Project</h2>
        
        <div className="contact-split">
          
          {/* Left: Contact Info & Availability */}
          <div className="contact-info">
            <h3 style={{ marginTop: 0 }}>Get in Touch</h3>
            <p style={{ marginBottom: '2rem', color: '#666' }}>
              Have a book idea? Need copy for your website? Fill out the form, and let's discuss how we can help.
            </p>

            <div className="contact-item">
              <Mail size={20} color="#d35400" />
              <span>hello@lumiwriters.com</span>
            </div>
            
            {/* Social Media Links */}
            <div className="social-links">
              <a href="#" className="social-icon"><Linkedin size={24} /></a>
              <a href="#" className="social-icon"><Twitter size={24} /></a>
              <a href="#" className="social-icon"><Instagram size={24} /></a>
            </div>

            {/* Availability Box */}
            <div className="status-box">
              <div className="status-row">
                <CheckCircle size={20} /> Currently Accepting New Clients
              </div>
              <div className="contact-item" style={{ fontSize: '0.9rem', margin: 0, gap: '10px' }}>
                <Clock size={16} /> Typical response time: <strong>24 Hours</strong>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-container">
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <CheckCircle size={48} color="#27ae60" style={{ marginBottom: '1rem' }} />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn" onClick={() => setStatus('idle')} style={{ marginTop: '1rem' }}>
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
                  <p style={{ color: '#e74c3c', marginBottom: '1rem' }}>
                    Oops! Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'submitting'}>
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