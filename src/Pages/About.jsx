import React from 'react';
import {
  BookOpen, Award, User, Feather, Briefcase, Sprout, Zap, Image
} from 'lucide-react';

export default function About() {

  // Gallery Data (Placeholder names - ensure files exist in /public)
  const galleryImages = [
    { id: 1, src: "/Gal1.jpg", alt: "Goddy Jedy-Agba Portrait" },
    { id: 2, src: "/Gal2.jpg", alt: "Public Service Duties" },
    { id: 3, src: "/Gal3.jpg", alt: "Godilogo Farms" },
    { id: 4, src: "/Gal4.jpg", alt: "Book Launch Event" },
    { id: 5, src: "/Gal5.jpg", alt: "Goddy Jedy-Agba Portrait" },
    { id: 7, src: "/Gal7.jpg", alt: "Goddy Jedy-Agba Portrait" },
    { id: 6, src: "/Gal6.jpg", alt: "Goddy Jedy-Agba Portrait" },
    { id: 9, src: "/Gal9.jpg", alt: "Goddy Jedy-Agba Portrait" },

  ];

  return (
    <div className="animate-fade reviews-page-wrapper">

      {/* --- PART 1: ABOUT THE AUTHOR (Bio) --- */}
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '6rem' }}>

        {/* Left: Author Image */}
        <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <img
              src="/Author.jpg"
              alt="Goddy Jedy-Agba"
              style={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: 'var(--shadow)',
                objectFit: 'cover',
                aspectRatio: '3/4',
                background: '#eee'
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
          <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem', lineHeight: '1.2' }}>Goddy Jedy-Agba, OFR</h1>

          <div style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Goddy Jedy-Agba, OFR</strong>, is a former Minister of State for Power, seasoned technocrat, and accomplished public servant with over three decades of experience in governance, oil and gas, and agriculture.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              He served as Group General Manager in the Crude Oil Marketing Division at NNPC and later founded Godilogo Farms, empowering thousands of rural farmers. Honoured nationally for his integrity and leadership, he is also the author of <em>Stepping Forward with Uti J.D. Agba</em>, a tribute to legacy, service, and principled living.
            </p>
            <p>
              Beyond his public persona, his memoir <em>Grace Unspeakable</em> shares a deeply personal journey of faith and resilience after a life-threatening illness, offering a narrative of profound grace and renewed purpose.
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

      {/* --- PART 2: CAREER MILESTONES (New) --- */}
      <div style={{ marginBottom: '6rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Decades of Impact</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

          {/* Milestone 1 */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #eee', textAlign: 'center' }}>
            <div style={{ background: '#fdfbf7', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <Zap size={28} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Minister of State</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Served as Nigeria's Minister of State for Power, driving reforms in the energy sector.</p>
          </div>

          {/* Milestone 2 */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #eee', textAlign: 'center' }}>
            <div style={{ background: '#fdfbf7', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <Briefcase size={28} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>NNPC Veteran</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Former Group General Manager (Crude Oil Marketing Division) with 30+ years service.</p>
          </div>

          {/* Milestone 3 */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #eee', textAlign: 'center' }}>
            <div style={{ background: '#fdfbf7', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <Sprout size={28} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Godilogo Farms</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Founder of one of Nigeria's largest integrated farms, empowering rural communities.</p>
          </div>

        </div>
      </div>

      {/* --- PART 3: GALLERY SECTION (New) --- */}
      <div style={{ padding: '4rem 0', background: 'var(--bg-light)', marginBottom: '6rem', borderRadius: '16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Moments in Time</h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>A glimpse into the life and journey of Goddy Jedy-Agba.</p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          padding: '0 2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {galleryImages.map((img) => (
            <div key={img.id} style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              height: '250px',
              background: '#fff'
            }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://atilary.pixieset.com/princegoddyjedyagbasportraits/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
          >
            View Full Gallery <Image size={18} />
          </a>
        </div>
      </div>

      {/* --- PART 4: THE VISION --- */}
      <div style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '4rem' }}>
        <Feather size={40} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '900' }}>Resilience in Every Page</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.7' }}>
          Goddy Jedy-Agba's story is one of faith and survival. Through his writing and public service, he continues to inspire a generation to lead with grace and integrity.
        </p>
      </div>

    </div>
  );
}