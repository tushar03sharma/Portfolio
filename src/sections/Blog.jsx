import { ArrowUpRight, PenLine } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const planned = [
  { title: 'How I actually learned React (not the tutorial way)', tag: 'React', color: '#3B82F6' },
  { title: 'My experience with ML as someone from a web background', tag: 'Data Science', color: '#8B5CF6' },
  { title: 'Things I wish I knew before starting DSA', tag: 'DSA', color: '#F59E0B' },
  { title: 'Building a portfolio that feels like yours', tag: 'Career', color: '#FF6B6B' },
];

export default function Blog() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="blog" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p className="section-label">Thoughts</p>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)' }}>
              Blog &amp; Learnings
            </h2>
          </div>
        </div>

        {/* Honest coming soon state */}
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Notice card */}
          <div className="glass" style={{ padding: '28px 32px', marginBottom: '28px', display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: 'var(--accent-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <PenLine size={20} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                Haven't started writing yet
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 560 }}>
                I want to write about things I've actually figured out — not generic tutorials.
                Got a few topics in mind. Will post here once I have something worth reading.
              </p>
            </div>
          </div>

          {/* Planned posts */}
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '14px' }}>
            Topics I'm planning to write about
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
            {planned.map((post, idx) => (
              <div
                key={idx}
                className="glass"
                style={{
                  padding: '18px 20px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${idx * 80}ms, transform 0.5s ease ${idx * 80}ms`,
                  display: 'flex', alignItems: 'center', gap: '14px',
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: post.color, flexShrink: 0 }} />
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, flex: 1 }}>
                  {post.title}
                </p>
                <span style={{
                  padding: '3px 9px', borderRadius: '100px',
                  background: post.color + '18', color: post.color,
                  fontSize: '0.65rem', fontWeight: 600, flexShrink: 0,
                }}>{post.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
