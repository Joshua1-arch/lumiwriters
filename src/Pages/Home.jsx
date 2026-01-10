import React from 'react';
import { 
  ArrowRight, BookOpen, Star, CheckCircle, Heart, Shield, ShoppingBag
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple Icons
const SelarIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>;
const AmazonIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 7.5c-3.5 0-6.5 2.5-6.5 6s3 6 6.5 6c2.5 0 4.5-1.5 5.5-3.5.5-1 1-1.5 2-1.5.5 0 1 .5 1 1 0 1.5-2 3.5-3.5 4.5-1.5 1-3.5 1.5-5.5 1.5-5 0-9-4-9-9s4-9 9-9c2.5 0 4.5.5 6 2 .5.5.5 1.5 0 2-.5.5-1.5.5-2 0-1-1-2.5-1.5-4-1.5z"/></svg>;

const Home = () => {
  return (
    <div className="animate-fade">
      
      {/* 1. HERO SECTION */}
      <section className="sales-hero">
        <div className="hero-container">
          {/* Left: The Book */}
          <div className="hero-book-side">
            <img 
              src="/Grace.jpeg" 
              alt="Grace Unspeakable Book Cover" 
              className="hero-book-img"
            />
          </div>

          {/* Right: The Pitch */}
          <div className="hero-text-side">
            <span className="hero-badge">Now Available</span>
            <h1 className="hero-title">Grace Unspeakable</h1>
            <p className="hero-subtitle">A Memoir of Faith, Survival, and Service</p>
            
            <div className="hero-desc">
              <p>
                <strong>Goddy Jedy-Agba</strong> faced a life-threatening illness that changed everything. 
                This is the extraordinary story of his survival, his deep-rooted faith, and the profound 
                grace that redefined his purpose.
              </p>
            </div>

            {/* Pricing */}
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '1px' }}>Hardcopy</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2c3e50' }}>₦25,000</span>
              </div>
              <div style={{ width: '1px', height: '40px', background: '#ddd' }}></div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '1px' }}>Ebook</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2c3e50' }}>₦18,000</span>
              </div>
            </div>

            {/* Buy Buttons */}
            <div className="buy-buttons-container">
              <a href="https://selar.com/902j274843" className="main-buy-btn">
                <SelarIcon /> Order on Selar (Nigeria)
              </a>
              
              <div className="secondary-buttons">
                <a href="https://rhbooks.com.ng/product/grace-unspeakable-a-memoir/" className="sec-btn" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag size={20} /> Rovingheights
                </a>
                <a href="#" className="sec-btn">
                  <AmazonIcon /> Amazon
                </a>
                <a href="#" className="sec-btn">
                  <BookOpen size={20} /> Kobo
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* 2. ABOUT THE BOOK (UPDATED CLASS) */}
      <section className="about-book-section" style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center', color: '#2c3e50' }}>
            About the Book
          </h2>
          
          <div className="about-book-content" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444', fontFamily: 'Georgia, serif' }}>
            <p>
              In <strong>Grace Unspeakable</strong>, Goddy Jedy-Agba shares an extraordinary story of resilience, faith, and purpose, offering a heartfelt reflection on a life shaped by trials, triumphs, and divine grace. This deeply personal memoir begins with a life-altering health crisis, a sudden illness that led to a near-fatal surgery and a coma. Emerging from the brink of death, the author discovers the transformative power of survival and healing, setting the stage for a journey of renewed perspective and purpose.
            </p>
            
            <p>
              The narrative moves seamlessly from personal recovery to the demanding realm of leadership. Appointed as Nigeria’s Minister of State for Power, the author reflects on the immense challenges of navigating public service in a nation striving for transformation. Drawing on foundational roles at the Nigerian National Petroleum Corporation (NNPC) and his experience as an assistant to government ministers, he offers valuable insights into Nigeria’s development challenges and the resilience required to lead with integrity and vision.
            </p>

            <p>
              The memoir also pays homage to the author’s academic foundation, particularly the invaluable lessons learned from revered professors at Ahmadu Bello University. These mentors not only instilled in him a commitment to excellence and critical thinking but also shaped his understanding of leadership, service, and the responsibility of contributing to the greater good.
            </p>

            <p>
              Beyond professional achievements, Grace Unspeakable is a testament to the author’s faith and gratitude. He introduces readers to the concept of “thanks-living”, a lifestyle shaped by his deep Christian beliefs and his mother’s profound words during his recovery: “It is only God that has done this for you.” The memoir delves into the author’s personal life, recounting the loss of his parents, whom he refers to as his “pillars,” and his journey to lead his family through grief and growth. Celebrating the sanctity of marriage, the author reflects on the vital role his wife, Beatrice, plays in his life and the importance of family as a foundation for success.
            </p>

            <p>
              Through moments of vulnerability, the wisdom of mentors, and triumph over adversity, Grace Unspeakable offers a unique blend of personal reflection, professional insight, and spiritual wisdom. It is a story that inspires readers to find purpose in their pain, embrace the strength found in faith, and live a life of gratitude, service, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE HOOK: Why Read This? */}
      <section className="hook-section-bg">
        <div className="hook-card-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#000' }}>Why You Need To Read This Book</h2>
            <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              More than just a biography, this is a roadmap for navigating life's darkest valleys.
            </p>
          </div>

          <div className="hook-grid">
            <div className="hook-item">
              <Shield size={40} color="#d35400" style={{ marginBottom: '1rem' }} />
              <h3>Resilience</h3>
              <p>Discover the mental and spiritual fortitude required to face a terminal diagnosis and emerge stronger.</p>
            </div>
            <div className="hook-item">
              <Heart size={40} color="#d35400" style={{ marginBottom: '1rem' }} />
              <h3>Faith</h3>
              <p>Witness how deep-rooted spirituality can anchor you when the storms of life try to sweep you away.</p>
            </div>
            <div className="hook-item">
              <CheckCircle size={40} color="#d35400" style={{ marginBottom: '1rem' }} />
              <h3>Leadership</h3>
              <p>Lessons on service, integrity, and mentorship from a distinguished public servant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AUTHOR TEASER */}
      <section style={{ background: '#2c3e50', color: 'white', padding: '5rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>About the Author</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 2rem auto', fontSize: '1.2rem', opacity: '0.9' }}>
            Goddy Jedy-Agba shares his journey not for applause, but to be a beacon of hope for anyone struggling to find light in the darkness.
          </p>
          <Link to="/about" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
            Read Full Bio <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: '#fdfbf7' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Begin The Journey Today</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>Available in Hardcopy (₦25,000) and eBook (₦18,000).</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://selar.com/902j274843" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Buy Now on Selar</a>
          <a href="https://rhbooks.com.ng/product/grace-unspeakable-a-memoir/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Buy on Rovingheights</a>
        </div>
      </section>

    </div>
  );
};

export default Home;