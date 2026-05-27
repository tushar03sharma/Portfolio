import { useEffect, useState } from 'react';
import { Zap, BookOpen } from 'lucide-react';
import { learning, resources } from '../data/learning';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function LearningCard({ item, isVisible, idx }) {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setBarWidth(item.progress), 300 + idx * 80);
      return () => clearTimeout(t);
    }
  }, [isVisible, item.progress, idx]);

  return (
    <div
      className="glass glass-hover"
      style={{
        padding: '24px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${idx * 100}ms, transform 0.6s ease ${idx * 100}ms`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
            {item.title}
          </p>
          <span style={{
            padding: '2px 8px', borderRadius: '100px',
            background: item.color + '18', color: item.color,
            fontSize: '0.65rem', fontWeight: 600,
          }}>
            {item.tag}
          </span>
        </div>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: item.color }}>{item.progress}%</span>
      </div>

      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
        {item.desc}
      </p>

      {/* Progress bar */}
      <div style={{ height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${barWidth}%`,
          background: item.color,
          borderRadius: 2,
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
      </div>
    </div>
  );
}

export default function Learning() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="learning" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p className="section-label">Growth</p>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)' }}>
              What I'm Learning
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            <Zap size={14} style={{ color: 'var(--accent)' }} />
            Continuously growing
          </div>
        </div>

        {/* Cards grid */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '18px',
            marginBottom: '36px',
          }}
        >
          {learning.map((item, idx) => (
            <LearningCard key={item.title} item={item} isVisible={isVisible} idx={idx} />
          ))}
        </div>

        {/* Resources */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <BookOpen size={15} style={{ color: 'var(--accent)' }} />
            <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Resources I'm using
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {resources.map(res => (
              <div
                key={res.title}
                className="glass"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '10px 16px', borderRadius: '100px',
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: res.color }} />
                <span style={{ fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-primary)' }}>{res.title}</span>
                <span style={{
                  padding: '2px 8px', borderRadius: '100px',
                  background: res.color + '18', color: res.color,
                  fontSize: '0.65rem', fontWeight: 600,
                }}>{res.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
