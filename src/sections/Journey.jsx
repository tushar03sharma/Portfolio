import { GraduationCap, Trophy, Star } from 'lucide-react';
import { journey } from '../data/journey';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const iconMap = { GraduationCap, Trophy, Star };

function TimelineCard({ item, isVisible, idx }) {
  return (
    <div
      className="glass glass-hover"
      style={{
        padding: '24px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${idx * 120}ms, transform 0.6s ease ${idx * 120}ms`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <span style={{
          padding: '4px 10px', borderRadius: '100px',
          background: item.color + '18',
          color: item.color,
          fontSize: '0.68rem', fontWeight: 600,
        }}>
          {item.type === 'education' ? 'Education' : 'Achievement'}
        </span>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.period}</span>
      </div>

      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
        {item.title}
      </h3>
      <p style={{ fontSize: '0.82rem', color: item.color, fontWeight: 600, marginBottom: '12px' }}>
        {item.org}
      </p>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '14px' }}>
        {item.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {item.tags.map(tag => (
          <span key={tag} className="chip" style={{ fontSize: '0.68rem' }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Journey() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="journey" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="section-label">Journey</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)' }}>
            Education &amp; Growth
          </h2>
        </div>

        {/* Timeline */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 60px 1fr',
            gap: '0',
            position: 'relative',
          }}
          className="timeline-grid"
        >
          {journey.map((item, idx) => {
            const Icon = iconMap[item.iconType] || GraduationCap;
            const isLeft = idx % 2 === 0;

            return (
              <div key={idx} style={{ display: 'contents' }}>
                {/* Left cell */}
                <div style={{ padding: '0 20px 40px 0', display: 'flex', alignItems: 'flex-start' }}>
                  {isLeft && <TimelineCard item={item} isVisible={isVisible} idx={idx} />}
                </div>

                {/* Center — icon + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: item.color + '20',
                    border: `2px solid ${item.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color, flexShrink: 0, zIndex: 1,
                    background: 'var(--bg-secondary)',
                  }}>
                    <Icon size={18} />
                  </div>
                  {idx < journey.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: 'var(--border)', minHeight: 40, marginTop: 6 }} />
                  )}
                </div>

                {/* Right cell */}
                <div style={{ padding: '0 0 40px 20px', display: 'flex', alignItems: 'flex-start' }}>
                  {!isLeft && <TimelineCard item={item} isVisible={isVisible} idx={idx} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-grid {
            grid-template-columns: 36px 1fr !important;
          }
          .timeline-grid > div:nth-child(3n+1) { display: none !important; }
          .timeline-grid > div:nth-child(3n+3) { padding-left: 16px !important; }
        }
      `}</style>
    </section>
  );
}
