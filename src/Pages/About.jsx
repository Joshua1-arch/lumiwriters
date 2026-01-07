import React from 'react';
import { 
  BookOpen, Award, User, Feather
} from 'lucide-react';

export default function About() {
  return (
    <div className="animate-fade reviews-page-wrapper">
      
      {/* --- PART 1: ABOUT THE AUTHOR --- */}
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
        
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
          <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem', lineHeight: '1.2' }}>Goddy Jedy-Agba, <span style={{fontSize: '1.5rem', opacity: 0.7}}></span></h1>
          
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

      {/* --- PART 2: THE VISION --- */}
      <div style={{ textAlign: 'center', background: '#fdfbf7', padding: '4rem 2rem', borderRadius: '24px', border: '1px solid #eee' }}>
        <Feather size={40} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '900' }}>Resilience in Every Page</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.7' }}>
          Goddy Jedy-Agba's story is one of faith and survival. Through his writing and public service, he continues to inspire a generation to lead with grace and integrity.
        </p>
      </div>

    </div>
  );
}