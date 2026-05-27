import { useState, useEffect, useRef } from 'react';
import { skills, categories } from '../data/skills';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function SkillCard({ skill, isVisible, idx }) {
  const [barWidth, setBarWidth] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setBarWidth(skill.level), 200 + idx * 40);
      return () => clearTimeout(t);
    }
  }, [isVisible, skill.level, idx]);

  return (
    <div
      className="glass glass-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '18px 16px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${idx * 40}ms, transform 0.5s ease ${idx * 40}ms`,
        borderColor: hovered ? skill.color + '50' : 'var(--border)',
      }}
    >
      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: skill.color + '18',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '12px',
        fontSize: '0.72rem', fontWeight: 700,
        color: skill.color,
        transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
        transition: 'transform 0.25s ease',
        border: hovered ? `1.5px solid ${skill.color}50` : '1.5px solid transparent',
      }}>
        {skill.icon}
      </div>

      <p style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
        {skill.name}
      </p>

      {/* Skill bar */}
      <div style={{ height: 3, background: 'var(--border)', borderRadius: 2, marginBottom: '5px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${barWidth}%`,
          background: skill.color,
          borderRadius: 2,
          transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
      </div>
      <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'right' }}>{skill.level}%</p>
    </div>
  );
}

export default function Stack() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useIntersectionObserver();

  const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.cat === activeCategory);

  return (
    <section id="stack" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <p className="section-label">Skills</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', marginBottom: '10px' }}>
            Tech Stack
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: 500 }}>
            Technologies I'm learning and working with on my full-stack and data science journey.
          </p>
        </div>

        {/* Category Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '7px 18px',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 500,
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                background: activeCategory === cat ? 'var(--accent-light)' : 'var(--bg-card)',
                color: activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '14px',
          }}
        >
          {filtered.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} isVisible={isVisible} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
