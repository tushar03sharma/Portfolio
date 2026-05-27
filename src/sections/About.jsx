import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  { value: '5+',  label: 'Projects Built',  sub: 'Learning by building',         color: '#FF6B6B' },
  { value: '3+',   label: 'Tech Stack',       sub: 'Languages & frameworks',       color: '#3B82F6' },
  { value: '3rd',  label: 'Year B.Tech',      sub: 'CSE at ADGIPS',               color: '#22C55E' },
  { value: '100+', label: 'Problems Solved',  sub: 'LeetCode & coding platforms',  color: '#F59E0B' },
];

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useIntersectionObserver();
  const { ref: rightRef, isVisible: rightVisible } = useIntersectionObserver();

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'start',
        }} className="about-grid">

          {/* Left Column */}
          <div
            ref={leftRef}
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateX(0)' : 'translateX(-32px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <p className="section-label">About Me</p>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '28px', color: 'var(--text-primary)' }}>
              Learning by building,{' '}
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>growing</span>{' '}
              every day.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              {[
                "I'm a 3rd year Computer Science student at Dr. Akhilesh Das Gupta Institute of Professional Studies, passionate about full-stack development and data science. I believe the best way to learn is by building real projects that solve actual problems.",
                "My focus areas include building responsive web applications, understanding data patterns, and creating meaningful user experiences. I'm constantly exploring new technologies and pushing myself to write cleaner, more efficient code.",
                "When I'm not coding, you'll find me solving algorithms on LeetCode, or diving deep into ML papers and tutorials.",
              ].map((text, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>{text}</p>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Full Stack Dev', 'Data Science', 'Problem Solver', 'Lifelong Learner'].map(tag => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div ref={rightRef}>
            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="glass glass-hover"
                  style={{
                    padding: '24px 20px',
                    opacity: rightVisible ? 1 : 0,
                    transform: rightVisible ? 'translateY(0)' : 'translateY(28px)',
                    transition: `opacity 0.6s ease ${idx * 100}ms, transform 0.6s ease ${idx * 100}ms`,
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: stat.color + '20',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '12px',
                  }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: stat.color }} />
                  </div>
                  <p className="display" style={{ fontSize: '2.4rem', color: stat.color, marginBottom: '4px' }}>{stat.value}</p>
                  <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '3px' }}>{stat.label}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Quote Card */}
            <div
              className="glass"
              style={{
                padding: '20px 22px',
                borderLeft: '3px solid var(--accent)',
                borderRadius: '20px',
                opacity: rightVisible ? 1 : 0,
                transition: 'opacity 0.7s ease 0.4s',
              }}
            >
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '10px' }}>
                "The only way to learn a new programming language is by writing programs in it."
              </p>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>— Dennis Ritchie</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
