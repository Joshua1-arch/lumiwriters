import { Users, Target, Coffee } from 'lucide-react';

export default function About() {
  return (
    <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 400px' }}>
        <h2>Our Philosophy</h2>
        <p>
          At <strong>LumiWriters</strong>, we believe words have the power to change the world. 
          Founded in Lagos in 2024, our mission is to help writers articulate their deepest thoughts with clarity and grace.
        </p>
        <p>
          We are not AI; we are humans who love books, grammar, and storytelling.
        </p>
      </div>

      <div style={{ flex: '1 1 300px', display: 'grid', gap: '1rem' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Users size={30} color="#2c3e50" />
          <div><strong>Expert Team</strong><br/><small>Veterans of the industry</small></div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Target size={30} color="#2c3e50" />
          <div><strong>Precision</strong><br/><small>Zero compromise on quality</small></div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Coffee size={30} color="#2c3e50" />
          <div><strong>Passion</strong><br/><small>Fueled by creativity</small></div>
        </div>
      </div>
    </div>
  );
}