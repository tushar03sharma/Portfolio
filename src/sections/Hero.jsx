import { useEffect, useRef } from 'react';
import { Mail, Download, Sparkles, Zap } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from '../components/SocialIcons';
import FloatingBadge from '../components/FloatingBadge';

export default function Hero() {
  const glowRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const handleMouse = e => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.07;
      current.current.y += (mouse.current.y - current.current.y) * 0.07;
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${current.current.x}px ${current.current.y}px, var(--glow), transparent 70%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const socialBtn = (href, Icon) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 38, height: 38,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '10px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        color: 'var(--text-secondary)',
        transition: 'all 0.2s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = 'var(--accent)';
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = 'var(--text-secondary)';
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Icon size={16} />
    </a>
  );

  return (
    <section id="hero" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', paddingTop: 100, paddingBottom: 80 }}>
      {/* Mouse glow */}
      <div ref={glowRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, transition: 'background 0.1s' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          gap: '60px',
          alignItems: 'center',
          minHeight: 'calc(100vh - 180px)',
        }} className="hero-grid">

          {/* Left Column */}
          <div>
            {/* Open to Internships badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '7px 16px', borderRadius: '100px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              fontSize: '0.78rem', fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: '28px',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', animation: 'badge-blink 1.8s ease-in-out infinite' }} />
              Available for Internships
              <Sparkles size={13} style={{ color: 'var(--accent)' }} />
            </div>

            {/* Heading */}
            <h1 className="display" style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)', marginBottom: '4px', color: 'var(--text-primary)' }}>
              Hi, I'm
            </h1>
            <h1 className="display" style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)', marginBottom: '28px', color: 'var(--accent)', fontStyle: 'italic' }}>
              Tushar.
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: 480, lineHeight: 1.7, marginBottom: '40px' }}>
              3rd year CSE student at ADGIPS, Delhi. I enjoy building web apps and
              have recently gotten into data science. Still figuring a lot of things out, but that's kind of the point.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
              <a
                href="/resume.pdf"
                download
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 26px', borderRadius: '100px',
                  background: 'var(--text-primary)', color: 'var(--bg-primary)',
                  fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
              >
                <Download size={15} /> Resume
              </a>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 26px', borderRadius: '100px',
                  background: 'transparent', color: 'var(--text-primary)',
                  border: '1px solid var(--border-strong)',
                  fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                <Mail size={15} /> Let's talk
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginRight: '4px' }}>Find me on</span>
              {socialBtn('https://github.com/tushar03sharma', Github)}
              {socialBtn('https://twitter.com', Twitter)}
              {socialBtn('https://www.linkedin.com/in/tushar-sharma-a95b693b0/', Linkedin)}
            </div>
          </div>

          {/* Right Column — Hero Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="hero-right">
            {/* Main floating card */}
            <div className="glass float-slow" style={{ width: 280, height: 340, borderRadius: 24, overflow: 'hidden', position: 'relative' }}>
              <img
                src="/tushar.jpg"
                alt="Tushar Sharma"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Name overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
              }}>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '2px' }}>Tushar Sharma</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>CSE Student & Developer</p>
              </div>
            </div>

            {/* Floating tech badges */}
            <FloatingBadge label="React" color="#61DAFB" style={{ top: '10%', left: '-15%', animation: 'float 4s ease-in-out infinite' }} />
            <FloatingBadge label="Python" color="#3776AB" style={{ top: '8%', right: '-10%', animation: 'float-slow 6s ease-in-out infinite' }} />
            <FloatingBadge label="Node.js" color="#68A063" style={{ bottom: '20%', left: '-18%', animation: 'float-reverse 5s ease-in-out infinite' }} />
            <FloatingBadge label="ML" color="#8B5CF6" style={{ bottom: '18%', right: '-12%', animation: 'float 4.5s ease-in-out infinite' }} />
            <FloatingBadge label="TypeScript" color="#3178C6" style={{ top: '45%', left: '-20%', animation: 'float-slow 7s ease-in-out infinite' }} />

            {/* Stat cards */}
            <div className="glass" style={{
              position: 'absolute', top: '0%', right: '-24px',
              padding: '10px 14px', borderRadius: '14px', textAlign: 'center', minWidth: 90,
            }}>
              <p className="display" style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>3rd</p>
              <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Year B.Tech</p>
            </div>

            <div className="glass" style={{
              position: 'absolute', bottom: '5%', left: '-28px',
              padding: '10px 14px', borderRadius: '14px',
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'var(--accent)', border: 'none',
            }}>
              <Zap size={14} style={{ color: '#fff' }} />
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fff' }}>10+</p>
                <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.8)' }}>Projects Built</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}>
          <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--text-muted), transparent)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}
