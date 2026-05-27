import { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from '../components/SocialIcons';
import { projects } from '../data/projects';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function ProjectCard({ project, idx, isVisible }) {
  const [hovered, setHovered] = useState(false);
  const isLarge = project.size === 'large';

  return (
    <div
      className="glass"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: isLarge ? 'span 2' : 'span 1',
        display: 'flex',
        flexDirection: isLarge ? 'row' : 'column',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.6s ease ${idx * 120}ms, transform 0.6s ease ${idx * 120}ms`,
        borderColor: hovered ? project.accent + '50' : 'var(--border)',
        cursor: 'pointer',
      }}
    >
      {/* Image */}
      <div style={{
        width: isLarge ? '55%' : '100%',
        height: isLarge ? 280 : 200,
        overflow: 'hidden',
        flexShrink: 0,
        position: 'relative',
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.4s ease',
          }}
        />
        {/* Year badge */}
        <span style={{
          position: 'absolute', top: 14, left: 14,
          padding: '4px 10px', borderRadius: '100px',
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
          fontSize: '0.7rem', fontWeight: 600, color: '#fff',
        }}>{project.year}</span>
        {/* Featured badge */}
        {project.featured && (
          <span style={{
            position: 'absolute', top: 14, right: 14,
            padding: '4px 10px', borderRadius: '100px',
            background: project.accent,
            fontSize: '0.7rem', fontWeight: 600, color: '#fff',
          }}>Featured</span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            style={{
              color: 'var(--text-muted)',
              flexShrink: 0,
              marginLeft: 8,
              transform: hovered ? 'rotate(-45deg)' : 'rotate(0)',
              transition: 'transform 0.25s ease',
            }}
          />
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
          {project.tags.map(tag => (
            <span key={tag} className="chip" style={{ fontSize: '0.68rem' }}>{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <a
            href={project.demo}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '7px 14px', borderRadius: '100px',
              background: project.accent, color: '#fff',
              fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            <ExternalLink size={12} /> Demo
          </a>
          <a
            href={project.github}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '7px 14px', borderRadius: '100px',
              background: 'var(--bg-secondary)', color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
              fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            <Github size={12} /> Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p className="section-label">Work</p>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)' }}>
              Featured Projects
            </h2>
          </div>
          <a
            href="https://github.com/tushar03sharma"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)',
              textDecoration: 'none', transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            View All on GitHub <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
          className="projects-grid"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} isVisible={isVisible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid > * { grid-column: span 1 !important; flex-direction: column !important; }
          .projects-grid > * > div:first-child { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
