import React from 'react';
import {
  ArrowRight, BookOpen, CheckCircle, Heart, Shield, ShoppingBag, Calendar, MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple Icons
const SelarIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>;
const AmazonIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 7.5c-3.5 0-6.5 2.5-6.5 6s3 6 6.5 6c2.5 0 4.5-1.5 5.5-3.5.5-1 1-1.5 2-1.5.5 0 1 .5 1 1 0 1.5-2 3.5-3.5 4.5-1.5 1-3.5 1.5-5.5 1.5-5 0-9-4-9-9s4-9 9-9c2.5 0 4.5.5 6 2 .5.5.5 1.5 0 2-.5.5-1.5.5-2 0-1-1-2.5-1.5-4-1.5z" /></svg>;

const Home = () => {
  // Define the gradient variable for reuse in inline styles
  const bgGradient = 'linear-gradient(135deg, var(--bg-light) 0%, #ffffff 100%)';

  // CHANGED: Use the new Royal Blue accent for icons so they don't fight the background
  const iconColor = "#0056b3";

  return (
    <div className="animate-fade">

      {/* 1. HERO SECTION */}
      <section className="sales-hero">
        <div className="hero-container">
          {/* Left: The Book */}
          <div className="hero-book-side animate-float">
            <img
              src="/Grace.jpeg"
              alt="Grace Unspeakable Book Cover"
              className="hero-book-img"
            />
          </div>

          {/* Right: The Pitch */}
          <div className="hero-text-side">
            <span className="hero-badge animate-pulse">Now Available</span>
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
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0a192f' }}>₦25,000</span>
              </div>
              <div style={{ width: '1px', height: '40px', background: '#dae8f5' }}></div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#888', fontWeight: 'bold', letterSpacing: '1px' }}>Ebook</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0a192f' }}>₦18,000</span>
              </div>
            </div>

            {/* Buy Buttons */}
            <div className="buy-buttons-container">
              <a href="https://selar.com/902j274843" className="main-buy-btn">
                <SelarIcon /> Order on Selar
              </a>

              <div className="secondary-buttons">
                <a href="https://rhbooks.com.ng/product/grace-unspeakable-a-memoir/" className="sec-btn" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag size={20} /> Rovingheights
                </a>
                <a href="https://www.lulu.com/shop/goddy-jedy-agba/grace-unspeakable/ebook/product-w4wrjj4.html?page=1&pageSize=4" className="sec-btn">
                  <BookOpen size={20} /> lulu
                </a>
                <a href="https://www.crombooks.com.ng" className="sec-btn" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag size={20} /> CROM Books
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

      {/* 2. ABOUT THE BOOK */}
      <section className="about-book-section" style={{ padding: '6rem 2rem', background: bgGradient }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0a192f' }}>
              About the Book
            </h2>
            <a
              href="https://www.instagram.com/reel/DTV4ihrFYfi/?igsh=aXBuMnB0Nm52ZXdt"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-promo"
            >
              <Heart size={20} /> Watch the Promo on Instagram
            </a>
          </div>

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

      {/* 2.5 UPCOMING EVENT: BOOK READING */}
      <section className="event-section">
        <div className="event-card">

          <div className="event-header">
            <span className="event-tag">Exclusive Event</span>
            <h2 className="event-title">Book Reading Session</h2>
            <p className="event-subtitle">With Author Prince Goddy Jedy-Agba</p>
          </div>

          <div className="event-body">
            {/* Visual Side */}
            <div className="event-visuals">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src="/Author.jpg"
                  alt="Prince Goddy Jedy-Agba"
                  className="event-author-img"
                />
                <img
                  src="/Bookreading.jpeg"
                  alt="Grace Unspeakable Book Cover"
                  className="event-book-img"
                  style={{ right: '-50px', bottom: '-15px' }}
                />
              </div>
            </div>

            {/* Info Side */}
            <div className="event-info">

              <div className="event-info-item">
                <div className="event-icon-box">
                  <Calendar size={28} />
                </div>
                <div className="event-details-text">
                  <h4>March 31st</h4>
                  <p>11:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="event-info-item">
                <div className="event-icon-box">
                  <MapPin size={28} />
                </div>
                <div className="event-details-text">
                  <h4>Rovingheights Bookstore</h4>
                  <p>Shop S1, 2nd Floor, City Center Mall,<br /> Gimbiya St, Garki, Abuja</p>
                </div>
              </div>

              <div className="event-cta">
                <a href="https://rhbooks.com.ng" target="_blank" rel="noopener noreferrer" className="main-buy-btn" style={{ padding: '1rem 2rem', width: 'auto', display: 'inline-flex' }}>
                  Get Directions / RSVP
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. THE HOOK: Why Read This? */}
      <section className="hook-section-bg" style={{ padding: '6rem 2rem', background: bgGradient }}>
        <div className="hook-card-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0a192f' }}>Why You Need To Read This Book</h2>
            <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              More than just a biography, this is a roadmap for navigating life's darkest valleys.
            </p>
          </div>

          <div className="hook-grid">
            <div className="hook-item">
              <Shield size={40} color={iconColor} style={{ marginBottom: '1rem' }} />
              <h3>Resilience</h3>
              <p>Discover the mental and spiritual fortitude required to face a terminal diagnosis and emerge stronger.</p>
            </div>
            <div className="hook-item">
              <Heart size={40} color={iconColor} style={{ marginBottom: '1rem' }} />
              <h3>Faith</h3>
              <p>Witness how deep-rooted spirituality can anchor you when the storms of life try to sweep you away.</p>
            </div>
            <div className="hook-item">
              <CheckCircle size={40} color={iconColor} style={{ marginBottom: '1rem' }} />
              <h3>Leadership</h3>
              <p>Lessons on service, integrity, and mentorship from a distinguished public servant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AUTHOR TEASER (Dark Blue Background) */}
      <section style={{ background: '#0a192f', color: 'white', padding: '5rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>About the Author</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 2rem auto', fontSize: '1.2rem', opacity: '0.9' }}>
            Goddy Jedy-Agba shares his journey not for applause, but to be a beacon of hope for anyone searching for light in the moment of darkness, and for those striving to see possibilities where others see only limitations.
            <br />
            This is a story shaped by service and sustained by grace - grace beyond words, grace truly unspeakable.
          </p>
          <Link to="/about" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
            Read Full Bio <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 4.5 AVAILABLE IN STORES (NEW) */}
      <section className="store-section">
        <div className="container">
          <h2 className="store-heading">Available In Stores</h2>
          <p style={{ color: '#666' }}>Visit our retail partners to pick up a physical copy today.</p>

          <div className="store-grid">
            <div className="store-image-side">
              <img src="/1.jpg" alt="CROM Bookstore Flyer" className="store-flyer" />
            </div>
            <div className="store-info-side">
              <h3 className="store-subheading">CROM Bookstore</h3>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
                You can now walk into CROM Bookstore and purchase your copy of <strong>Grace Unspeakable</strong>.
                Experience the journey in premium hardcopy.
              </p>
              <a href="https://www.crombooks.com.ng" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit CROM Bookstore Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: bgGradient }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Begin The Journey Today</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>Available in Hardcopy (₦25,000) and eBook (₦18,000).</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://selar.com/902j274843" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Buy Now on Selar</a>
          <a href="https://rhbooks.com.ng/product/grace-unspeakable-a-memoir/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Rovingheights</a>
          <a href="https://www.crombooks.com.ng" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>CROM Books</a>
          <a href="#" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Amazon</a>
          <a href="#" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Kobo</a>
          <a href="https://www.lulu.com/shop/goddy-jedy-agba/grace-unspeakable/ebook/product-w4wrjj4.html?page=1&pageSize=4" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>lulu</a>
        </div>
      </section>

    </div>
  );
};

export default Home;