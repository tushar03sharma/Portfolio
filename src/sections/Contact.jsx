import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/SocialIcons';
import { contactLinks } from '../data/contact';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const iconMap = { Github, Linkedin, Mail };

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    background: 'var(--bg-card)',
    color: 'var(--text-primary)',
    fontSize: '0.88rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'inherit',
  };

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="section-label">Get In Touch</p>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Let's talk — about anything
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: 520, margin: '0 auto' }}>
            Whether it's an internship, a collab, or just someone who wants to talk tech — feel free to reach out.
            I try to reply within a day or two.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
          className="contact-grid"
        >
          {/* Left: Contact Form */}
          <div className="glass" style={{ padding: '32px' }}>
            {success ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={48} style={{ color: '#22C55E', margin: '0 auto 16px' }} />
                <h3 style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Message sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Thanks for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    padding: '13px 28px', borderRadius: '100px',
                    background: loading ? 'var(--text-muted)' : 'var(--accent)',
                    color: '#fff', fontWeight: 600, fontSize: '0.9rem',
                    border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = '0.88'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                >
                  <Send size={15} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Right: Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Open to Internships */}
            <div className="glass" style={{ padding: '22px', borderLeft: '3px solid #22C55E' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%', background: '#22C55E',
                  animation: 'badge-blink 1.8s ease-in-out infinite',
                }} />
                <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Looking for Internships</p>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Actively looking for internship opportunities — web development, backend, or data science roles.
                Open to remote. Happy to start with a trial or part-time arrangement too.
              </p>
            </div>

            {/* Education */}
            <div className="glass" style={{ padding: '22px' }}>
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                3rd Year B.Tech
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '10px' }}>
                CSE @ ADGIPS, Delhi
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Pretty much spending this year building actual projects and getting better at the fundamentals.
                Also trying to not fall behind on academics while doing that.
              </p>
            </div>

            {/* Connect Online */}
            <div className="glass" style={{ padding: '22px' }}>
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '14px' }}>
                Connect Online
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {contactLinks.map(link => {
                  const Icon = iconMap[link.iconType] || Mail;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        textDecoration: 'none', color: 'var(--text-secondary)',
                        fontSize: '0.84rem',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--accent)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div style={{
                        width: 32, height: 32, borderRadius: '9px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={14} />
                      </div>
                      <div>
                        <p style={{ fontWeight: 600, fontSize: '0.78rem', color: 'var(--text-primary)' }}>{link.label}</p>
                        <p style={{ fontSize: '0.72rem' }}>{link.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
