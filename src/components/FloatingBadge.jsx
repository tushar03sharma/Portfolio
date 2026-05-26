export default function FloatingBadge({ label, color, style }) {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '100px',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-md)',
        fontSize: '0.72rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
      {label}
    </div>
  );
}
