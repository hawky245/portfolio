import DarkVeil from './components/DarkVeil';
import CopyProtection from './components/CopyProtection';
import {
  ArchiveList,
  CTACluster,
  CurrentlyBuilding,
  EvidenceChips,
  ProjectCard,
  SectionHeader,
  SkillsMatrix,
} from './components/PortfolioSections';
import {
  archiveItems,
  currentlyBuilding,
  evidenceChips,
  profile,
  projects,
  repositories,
  skillGroups,
} from './data/portfolioData';
import './App.css';

const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Systems', href: '#systems' },
  { label: 'Skills', href: '#skills' },
  { label: 'Building', href: '#building' },
  { label: 'Contact', href: '#contact' },
];

export default function App() {
  return (
    <>
      {/* Global copy deterrence; renderless and mounted once for the whole page. */}
      <CopyProtection />

      <div
        className="darkveil-wrapper"
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      >
        <DarkVeil
          hueShift={243}
          noiseIntensity={0.03}
          scanlineIntensity={0.15}
          speed={0.35}
          scanlineFrequency={0.5}
          warpAmount={0.45}
          resolutionScale={1}
        />
      </div>

      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="page">
        <header className="topbar" role="banner">
          <div className="topbar-inner">
            <a className="topbar-name" href="#overview" aria-label="Abhay Surya R home">
              Abhay Surya R
            </a>
            <nav className="topbar-nav" aria-label="Section navigation">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="topbar-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main id="main" className="workspace" role="main">
          <section id="overview" className="section hero-section" aria-labelledby="hero-name">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="hero-status" aria-label="Status">
                  <span className="status-dot" aria-hidden="true" />
                  <span className="status-label">Open to internships, freelance work, and research collaboration</span>
                </div>

                <h1 id="hero-name" className="hero-title">
                  Abhay
                  <span className="name-break" aria-hidden="true"> </span>
                  Surya R
                </h1>
                <p className="hero-role">{profile.role}</p>
                <p className="hero-summary">{profile.summary}</p>
                <p className="hero-education">{profile.education}</p>

                <CTACluster profile={profile} />
                <EvidenceChips items={evidenceChips} />
              </div>

              <aside className="hero-proof card" aria-label="Featured engineering project">
                <span className="proof-eyebrow">Featured project</span>
                <h2>CareerPath AI prototype</h2>
                <p>
                  Career recommendation workflow and AI system architecture focused on product design,
                  frontend experience, and a documented API integration boundary.
                </p>
                <a className="inline-link" href="#career-guidance-ai">Review the project</a>
              </aside>
            </div>
          </section>

          <section id="systems" className="section" aria-labelledby="systems-heading">
            <SectionHeader
              eyebrow="Featured Systems"
              title="Featured Engineering Systems"
            />

            <div className="projects-stack">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section id="skills" className="section" aria-labelledby="skills-heading">
            <SectionHeader
              eyebrow="Skills Matrix"
              title="Technologies used across the work"
            />
            <SkillsMatrix groups={skillGroups} />
          </section>

          <section id="building" className="section" aria-labelledby="building-heading">
            <SectionHeader
              eyebrow="Active Initiative"
              title="Currently Building"
            />
            <CurrentlyBuilding items={currentlyBuilding} />
          </section>

          <section id="archive" className="section" aria-labelledby="archive-heading">
            <SectionHeader
              eyebrow="Archive"
              title="Additional work"
            />
            <div className="card">
              <ArchiveList items={archiveItems} />
            </div>
          </section>

          <section id="contact" className="section" aria-labelledby="contact-heading">
            <SectionHeader
              eyebrow="Contact"
              title="Connect or review the work"
            />
            <div className="card contact-panel">
              <a className="contact-tile" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <strong>Connect professionally</strong>
              </a>
              <a className="contact-tile" href={profile.github} target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <strong>View GitHub profile</strong>
              </a>
              <a className="contact-tile" href={`mailto:${profile.email}`}>
                <span>Email</span>
                <strong>{profile.email}</strong>
              </a>
            </div>
          </section>
        </main>

        <footer className="site-footer" role="contentinfo">
          <div className="footer-inner">
            <span>Abhay Surya R • Bengaluru, India</span>
            <span className="footer-built">Built with React + Vite</span>
          </div>
        </footer>
      </div>
    </>
  );
}
