export default function Footer() {
  const year = new Date().getFullYear();
  const links = ['Hero', 'About', 'Projects', 'Stack', 'Contact'];

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 0',
      background: 'var(--bg-primary)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <span className="display" style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>
          Tushar<span style={{ color: 'var(--accent)' }}>.</span>
        </span>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
          © {year} Tushar Sharma. Crafted with care.
        </p>

        <div style={{ display: 'flex', gap: '20px' }}>
          {links.map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
