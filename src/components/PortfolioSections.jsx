import { useEffect, useId, useRef, useState } from 'react';
import BorderGlow from './BorderGlow';
import { resume } from '../data/portfolioData';

export function SectionHeader({ eyebrow, title, summary }) {
  return (
    <div className="section-header">
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2 className="section-heading">{title}</h2>
      {summary ? <p className="section-summary">{summary}</p> : null}
    </div>
  );
}

export function CTACluster({ profile }) {
  return (
    <div className="cta-cluster" aria-label="Primary actions">
      <a className="cta cta--primary" href={profile.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a className="cta" href={profile.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a className="cta" href={`mailto:${profile.email}`}>
        Email
      </a>
      <ResumeCTA />
      <a className="cta cta--quiet" href="#career-guidance-ai">
        View CareerPath AI
      </a>
    </div>
  );
}

export function ResumeCTA() {
  const isReady = resume.status === 'ready';

  if (!isReady) {
    return (
      <span className="cta cta--disabled" role="status" aria-label="Resume coming soon">
        {resume.label}
      </span>
    );
  }

  return (
    <a className="cta" href={resume.href} download={resume.fileName}>
      Download Resume
    </a>
  );
}

export function EvidenceChips({ items }) {
  return (
    <ul className="evidence-chips" aria-label="Portfolio evidence areas">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function RepositoryAction({ repository }) {
  if (!repository || repository.status !== 'public') {
    return <span className="repo-status" role="status">{repository?.label || 'Repository Private'}</span>;
  }

  return (
    <a className="repo-link" href={repository.href} target="_blank" rel="noreferrer">
      View Repository
    </a>
  );
}

function TechBadges({ items }) {
  return (
    <ul className="tech-badges" aria-label="Technologies used">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ScreenshotGallery({ items, projectTitle }) {
  const [activeItem, setActiveItem] = useState(null);
  const titleId = useId();
  const openerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!activeItem) return undefined;

    const previous = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setActiveItem(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [activeItem]);

  return (
    <>
      <div className="gallery-grid" aria-label={`${projectTitle} evidence gallery`}>
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            className="gallery-card"
            onClick={(event) => {
              openerRef.current = event.currentTarget;
              setActiveItem(item);
            }}
          >
            <span className="gallery-type">{item.type}</span>
            <span className="gallery-title">{item.title}</span>
            <span className="gallery-caption">{item.caption}</span>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveItem(null)}>
          <div
            className="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button ref={closeRef} type="button" className="modal-close" onClick={() => setActiveItem(null)}>
              Close
            </button>
            <div className="modal-placeholder">
              <span className="gallery-type">{activeItem.type}</span>
              <h3 id={titleId}>{activeItem.title}</h3>
              <p>{activeItem.caption}</p>
              <span className="modal-coming-soon">Screenshot Coming Soon</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function MetricPlaceholder({ metrics }) {
  if (!metrics?.length) return null;

  return (
    <div className="metrics-panel" aria-label="Evaluation metrics status">
      {metrics.map((metric) => (
        <div key={metric.label} className="metric-item">
          <span className="metric-label">{metric.label}</span>
          <span className="metric-value">{metric.value}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectInner({ project }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `${project.id}-details`;

  return (
    <article id={project.id} className={`project-card project-card--${project.priority}`}>
      <div className="project-card-topline">
        <span className="project-category">{project.category}</span>
        <span className="project-status">{project.status}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <p className="project-proof">{project.proof}</p>
      <p className="project-limitation">{project.limitation}</p>

      <TechBadges items={project.technologies} />

      <ul className="project-highlights" aria-label={`${project.title} key highlights`}>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <MetricPlaceholder metrics={project.metrics} />
      <ScreenshotGallery items={project.gallery} projectTitle={project.title} />

      <div className="project-actions">
        <button
          type="button"
          className="details-toggle"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? 'Hide engineering details' : 'Show engineering details'}
        </button>
        <RepositoryAction repository={project.repository} />
      </div>

      {expanded ? (
        <div id={detailsId} className="project-details">
          {Object.entries(project.details).map(([label, text]) => (
            <section key={label} className="detail-block" aria-labelledby={`${project.id}-${label.replaceAll(' ', '-').toLowerCase()}`}>
              <h4 id={`${project.id}-${label.replaceAll(' ', '-').toLowerCase()}`}>{label}</h4>
              <p>{text}</p>
            </section>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function ProjectCard({ project }) {
  if (project.priority === 'primary') {
    return (
      <BorderGlow
        glowColor="271 100 50"
        backgroundColor="#120F17"
        edgeSensitivity={40}
        borderRadius={16}
        className="project-glow-shell"
      >
        <ProjectInner project={project} />
      </BorderGlow>
    );
  }

  return <ProjectInner project={project} />;
}

export function SkillsMatrix({ groups }) {
  return (
    <div className="skills-grid">
      {groups.map((group) => (
        <section key={group.title} className="skill-card" aria-labelledby={`skills-${group.title.toLowerCase().replaceAll(' ', '-')}`}>
          <h3 id={`skills-${group.title.toLowerCase().replaceAll(' ', '-')}`}>{group.title}</h3>
          <ul className="skill-list">
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function CurrentlyBuilding({ items }) {
  return (
    <div className="building-grid">
      {items.map((item) => (
        <article key={item.title} className="building-card">
          <div className="building-header">
            <h3>{item.title}</h3>
            <span className="building-status">{item.status}</span>
          </div>

          {item.role ? <p className="building-role">{item.role}</p> : null}
          {item.team ? (
            <p className="building-team">
              Team: <strong>{item.team}</strong>
            </p>
          ) : null}

          <p className="building-description">{item.description}</p>

          {item.stack ? (
            <div className="building-stack">
              <span className="building-stack-label">Stack:</span>
              <ul className="tech-badges">
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function ArchiveList({ items }) {
  return (
    <ul className="archive-list" role="list">
      {items.map((item) => (
        <li key={item.name} className="archive-item">
          <span className="archive-bullet" aria-hidden="true">—</span>
          <div className="archive-body">
            <strong className="archive-name">{item.name}</strong>
            <span className="archive-desc">{item.description}</span>
            {item.repository ? <RepositoryAction repository={item.repository} /> : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
