import React from 'react';
import { PenTool, FileText, Send, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* 1. HERO SECTION: Headline, Intro, and CTA */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Professional Content Writer <br /> & Copywriter</h1>
          
          <p className="hero-intro">
            I craft compelling narratives that engage audiences and drive results. 
            Whether you need SEO-optimized blog posts, technical documentation, or 
            persuasive sales copy, I turn complex ideas into clear, impactful words.
          </p>

          <div className="cta-group">
            <Link to="/about" className="btn btn-primary">
              Hire Me <Send size={18} />
            </Link>
            <Link to="/reviews" className="btn btn-outline">
              Read My Work <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MAIN WRITING SERVICES */}
      <section className="services-section">
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>
          My Writing Services
        </h2>
        <div className="services-grid">
          
          <div className="card service-card">
            <PenTool size={36} color="#d35400" strokeWidth={1.5} />
            <h3>Ghostwriting</h3>
            <p>
              Books, articles, and thought leadership pieces written to sound exactly like you—only better.
            </p>
          </div>

          <div className="card service-card">
            <FileText size={36} color="#d35400" strokeWidth={1.5} />
            <h3>Copywriting</h3>
            <p>
              Persuasive copy for websites, landing pages, and email campaigns that converts visitors into clients.
            </p>
          </div>

          <div className="card service-card">
            <BookOpen size={36} color="#d35400" strokeWidth={1.5} />
            <h3>Content Strategy</h3>
            <p>
              Planning and creating a content calendar that aligns with your brand voice and business goals.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;