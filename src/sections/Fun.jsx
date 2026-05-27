import { Music, Coffee, Gamepad2, Trophy } from 'lucide-react';
import { funItems } from '../data/fun';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const iconMap = { Music, Coffee, Gamepad2, Trophy };

function FunCard({ item, isVisible, idx }) {
  const Icon = iconMap[item.iconType] || Trophy;

  return (
    <div
      className="glass glass-hover"
      style={{
        padding: '28px',
        position: 'relative',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${idx * 100}ms, transform 0.6s ease ${idx * 100}ms`,
      }}
    >
      {/* Emoji watermark */}
      <div style={{
        position: 'absolute', bottom: -10, right: 10,
        fontSize: '5rem', opacity: 0.07,
        pointerEvents: 'none', userSelect: 'none',
        lineHeight: 1,
      }}>
        {item.emoji}
      </div>

      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: item.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '16px',
        color: item.color,
      }}>
        <Icon size={22} />
      </div>

      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
        {item.label}
      </h3>
      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
        {item.detail}
      </p>
    </div>
  );
}

export default function Fun() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="fun" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="section-label">Outside Code</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', marginBottom: '10px' }}>
            A bit about me
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Not everything is about the tech stack.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '18px',
            maxWidth: 960,
            margin: '0 auto',
          }}
          className="fun-grid"
        >
          {funItems.map((item, idx) => (
            <FunCard key={item.label} item={item} isVisible={isVisible} idx={idx} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .fun-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
