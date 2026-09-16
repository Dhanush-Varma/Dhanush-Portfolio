import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';

const assetPath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const portraitPath = assetPath(
  'attached_assets/Gemini_Generated_Image_qeo8i8qeo8i8qeo8_1787387108586.jpeg',
);
const resumePath = assetPath(
  'attached_assets/Dhanush_Indla_Resume_1787482786073.pdf',
);

const projects = [
  {
    number: '01',
    title: 'Enterprise Multi-Modal RAG System for Document Intelligence',
    description:
      'A production-grade agentic RAG system that reasons across PDFs, images, and structured data. Hybrid retrieval, dynamic chunking, OCR, and evaluation loops made enterprise document intelligence dependable.',
    tags: ['LangGraph', 'RAG', 'MCP', 'AWS Bedrock'],
    demoHref: 'https://enterprise-multimodal-rag.streamlit.app',
    githubHref: 'https://github.com/Dhanush-Varma/Real-Time-Fraud-Detection-with-MLOps-Pipeline-main',
  },
  {
    number: '02',
    title: 'Real-Time Fraud Detection with MLOps Pipeline',
    description:
      'A streaming fraud decisioning platform with low-latency model serving, drift monitoring, feature stores, and automated retraining paths — saving $120K/month across 5M+ daily transactions.',
    tags: ['Python', 'Kafka', 'Feast', 'Kubernetes'],
    demoHref: 'https://realtime-fraud-detection-app.streamlit.app',
    githubHref: 'https://github.com/Dhanush-Varma/Enterprise-Multi-Modal-RAG-System-for-Document-Intelligence-main',
  },
  {
    number: '03',
    title: 'Computer Vision Pipeline for Autonomous Quality Control',
    description:
      'An edge-first vision pipeline for autonomous inspection, combining YOLOv8, custom CNNs, Grad-CAM explainability, and optimized TensorRT inference at 60 FPS.',
    tags: ['YOLOv8', 'PyTorch', 'TensorRT', 'Edge AI'],
    demoHref: 'https://computer-vision-app-app.streamlit.app',
    githubHref: 'https://github.com/Dhanush-Varma/Computer-Vision-Pipeline-for-Autonomous-Quality-Control.',
  },
];

const certifications = [
  {
    title: 'GenAI Job Simulation',
    issuer: 'BCG X · Forage',
    date: 'Mar 2025',
    detail: 'Data extraction, initial analysis, and an AI-powered financial chatbot.',
    href: assetPath('attached-assets/BCG_-_GenAI_Job_Simulation_1787389232884.pdf'),
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia · Forage',
    date: 'Jun 2025',
    detail: 'Data analysis and forensic technology.',
    href: assetPath('attached-assets/Deloitte_Australia_-_Data_Analytics_Job_Simulation_1787389232889.pdf'),
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Quantium · Forage',
    date: 'Jun 2025',
    detail: 'Customer analytics, experimentation, uplift testing, and commercial application.',
    href: assetPath('attached-assets/Quantium_-_Data_Analytics_Job_Simulation_1787389242438.pdf'),
  },
  {
    title: 'UX Design Advanced Job Simulation',
    issuer: 'Lloyds Banking Group · Forage',
    date: 'Oct 2025',
    detail: 'Customer spending research, value propositions, and executive presentation design.',
    href: assetPath('attached-assets/Lloyds_Banking_Group_-_UX_Design_Advanced_Job_Simulation_1787389242431.pdf'),
  },
  {
    title: 'Data Science Job Simulation',
    issuer: 'Forage',
    date: 'Apr 2026',
    detail: 'EDA, data cleaning, feature engineering, modeling, evaluation, and recommendations.',
    href: assetPath('attached-assets/Dhanush_Indla_Data_Science_Job_Simulation_1787389232890.pdf'),
  },
];

const skills = [
  ['AI / LLM', 'LLM agents, agentic workflows, RAG, prompt engineering, evaluation, fine-tuning, multimodal AI'],
  ['Languages', 'Python, SQL, Java, Bash'],
  ['Machine Learning', 'PyTorch, TensorFlow, scikit-learn, XGBoost, NLP, computer vision, anomaly detection'],
  ['Data Engineering', 'Spark, Kafka, Airflow, Databricks, ETL / ELT, feature engineering'],
  ['Cloud', 'AWS, Azure, GCP, S3, Lambda, ECS, SageMaker, Azure ML'],
  ['Governance', 'Responsible AI, model risk, PII handling, access controls, auditability'],
  ['MLOps', 'MLflow, Docker, Kubernetes, CI/CD, Terraform, model registry, automated retraining'],
  ['Observability', 'CloudWatch, Prometheus, Grafana, drift monitoring, latency and cost telemetry'],
  ['BI / APIs', 'Power BI, Tableau, FastAPI, REST, microservices, PostgreSQL, MongoDB'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <main className="portfolio-shell">
      <div className="ambient-orb orb-one" aria-hidden="true" />
      <div className="ambient-orb orb-two" aria-hidden="true" />

      <header className="container-wide top-nav" data-testid="navigation-header">
        <a href="#top" className="brand-mark" onClick={handleNavClick} data-testid="link-brand">
          <span className="brand-dot" aria-hidden="true" />
          <span>Dhanush Indla</span>
        </a>
        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Primary navigation">
          <a href="#about" onClick={handleNavClick} data-testid="link-nav-about">About</a>
          <a href="#work" onClick={handleNavClick} data-testid="link-nav-work">Selected work</a>
          <a href="#experience" onClick={handleNavClick} data-testid="link-nav-experience">Experience</a>
          <a href="#skills" onClick={handleNavClick} data-testid="link-nav-skills">Capabilities</a>
          <a className="nav-contact" href="#contact" onClick={handleNavClick} data-testid="link-nav-contact">Let's talk</a>
        </nav>
      </header>

      <div id="top" className="container-wide hero">
        <div className="hero-copy">
          <div className="eyebrow reveal" data-testid="text-hero-eyebrow">AI / ML ENGINEER · ROCHESTER, NY</div>
          <h1 className="reveal delay-1" data-testid="text-hero-heading">
            I build systems
            <br />
            that <em>think</em> clearly.
          </h1>
          <p className="hero-lede reveal delay-2" data-testid="text-hero-summary">
            Production LLM agents, retrieval systems, and machine learning platforms engineered for the messy,
            high-stakes edge where intelligence becomes useful.
          </p>
          <div className="hero-cta-row reveal delay-3">
            <a className="button-primary" href="#work" data-testid="link-hero-work">
              Explore the work <ArrowDownRight size={15} />
            </a>
            <a className="button-quiet" href={resumePath} download data-testid="link-download-resume">
              Download resume <Download size={14} />
            </a>
          </div>
          <div className="availability reveal delay-3" data-testid="status-availability">
            <span className="live-dot" aria-hidden="true" />
            Open to thoughtful conversations about intelligent systems
          </div>
        </div>

        <div className="hero-portrait-wrap reveal delay-2">
          <span className="portrait-index" aria-hidden="true">IMAGE / 001</span>
          <div className="portrait-frame">
            <img src={portraitPath} alt="Portrait of Dhanush Indla" data-testid="img-portrait" />
          </div>
          <div className="portrait-label">Human in the loop</div>
        </div>
        <div className="hero-rule" aria-hidden="true">
          <span>Rochester / New York</span>
          <span>Scroll to inspect ↓</span>
        </div>
      </div>

      <section className="container-wide proof-strip reveal" aria-label="Selected outcomes" data-testid="section-outcomes">
        <div className="proof-item">
          <div className="proof-value" data-testid="text-outcome-onboarding">50%</div>
          <div className="proof-label">faster clinical onboarding</div>
        </div>
        <div className="proof-item">
          <div className="proof-value" data-testid="text-outcome-chargebacks">$120K</div>
          <div className="proof-label">chargebacks saved every month</div>
        </div>
        <div className="proof-item">
          <div className="proof-value" data-testid="text-outcome-accuracy">92%+</div>
          <div className="proof-label">accuracy at under 2s P95</div>
        </div>
        <div className="proof-item">
          <div className="proof-value" data-testid="text-outcome-incidents">52%</div>
          <div className="proof-label">fewer production incidents</div>
        </div>
      </section>

      <section id="about" className="container-wide section" data-testid="section-about">
        <div className="section-heading reveal">
          <div>
            <div className="section-marker eyebrow">01 / orientation</div>
            <h2>Intelligence,<br /><span className="serif">with a pulse.</span></h2>
          </div>
          <p className="section-intro">
            I am an <strong>AI / ML Engineer</strong> with 5+ years of experience turning ambiguous problems into
            production systems people can trust. My work sits between deep technical rigor and the human outcomes
            that make a system worth shipping.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal delay-1">
            <p>
              The best intelligent system is not the one with the most impressive demo. It is the one that quietly
              makes a hard decision clearer, a team faster, or a customer safer.
            </p>
            <p>
              At Morgan Stanley and Happiest Minds Technologies, I have built the connective tissue around models:
              retrieval and agent orchestration, evaluation, monitoring, cost controls, and the cloud infrastructure
              that lets good ideas survive contact with production.
            </p>
            <p>
              Based in Rochester, NY. Currently building at the intersection of applied AI, platform engineering,
              and responsible deployment.
            </p>
          </div>
          <div className="signal-list reveal delay-2" data-testid="list-working-principles">
            <div className="signal-row">
              <span>01</span>
              <div><h3>Ground the intelligence</h3><p>Retrieval, evaluation, and traceability before theatrics.</p></div>
            </div>
            <div className="signal-row">
              <span>02</span>
              <div><h3>Design for the second year</h3><p>Systems with clear ownership, telemetry, and a path to evolve.</p></div>
            </div>
            <div className="signal-row">
              <span>03</span>
              <div><h3>Keep the human signal</h3><p>Technology should sharpen judgment, never hide it.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section work-section" data-testid="section-work">
        <div className="container-wide">
          <div className="section-heading reveal">
            <div>
              <div className="section-marker eyebrow">02 / field notes</div>
              <h2>Selected<br /><span className="serif">systems.</span></h2>
            </div>
            <p className="section-intro">
              A few systems I have taken from first principle to the point where they create measurable leverage.
               <br /><br /><span className="mono" style={{ fontSize: '.68rem', color: 'hsl(var(--accent))' }}>OPEN A SYSTEM REPOSITORY ↗</span>
            </p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-card reveal delay-${index + 1}`} key={project.number} data-testid={`card-project-${project.number}`}>
                <div className="project-number">{project.number}</div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-meta">
                  <div className="project-tags">
                    {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-actions">
                    <a className="project-link-label" href={project.demoHref} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} aria-hidden="true" /></a>
                    <a className="project-link-label" href={project.githubHref} target="_blank" rel="noreferrer">GitHub <Github size={14} aria-hidden="true" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="container-wide section" data-testid="section-experience">
        <div className="section-heading reveal">
          <div>
            <div className="section-marker eyebrow">03 / trajectory</div>
            <h2>Where the<br /><span className="serif">work lives.</span></h2>
          </div>
          <p className="section-intro">A timeline of building, learning, and putting intelligent systems in rooms where the stakes are real.</p>
        </div>
        <div className="experience-grid">
          <aside className="aside-note reveal" data-testid="aside-experience-note">
            <h3>Operator's note</h3>
            <p>Models are only one layer. The durable advantage is the system around the model: clean data, careful interfaces, and feedback that arrives before failure.</p>
            <p className="big-note">Make it useful.<br />Make it legible.</p>
          </aside>
          <div className="timeline">
            <article className="timeline-item reveal delay-1" data-testid="experience-morgan-stanley">
              <div className="timeline-date">Jul 2025 — Present / New York</div>
              <h3>AI and ML Engineer</h3>
              <div className="timeline-company">Morgan Stanley</div>
              <ul>
                <li>Building enterprise AI and machine learning solutions with a focus on reliable, governed delivery.</li>
                <li>Designing agentic workflows and retrieval patterns that connect complex information to better decisions.</li>
                <li>Improving platform observability and operational quality, contributing to 52% fewer incidents and approximately 1,200 hours saved annually.</li>
              </ul>
            </article>
            <article className="timeline-item reveal delay-2" data-testid="experience-happiest-minds">
              <div className="timeline-date">Sep 2020 — Jun 2024 / Hyderabad</div>
              <h3>Machine Learning Engineer</h3>
              <div className="timeline-company">Happiest Minds Technologies</div>
              <ul>
                <li>Shipped fraud detection, computer vision, and NLP solutions from experimentation into monitored production services.</li>
                <li>Built systems reaching 92%+ accuracy at under 2 seconds P95 latency, with business outcomes including $120K in monthly chargebacks saved.</li>
                <li>Reduced clinical onboarding time by 50%, hallucinations by 38%, and token costs by 42% through evaluation-led iteration.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" className="section work-section" data-testid="section-skills">
        <div className="container-wide">
          <div className="skills-layout">
            <div className="reveal">
              <div className="section-marker eyebrow">04 / toolkit</div>
              <h2>Built across<br /><span className="serif">the stack.</span></h2>
              <p className="skills-lede">From the first prompt to the last production alert, I like understanding the whole shape of a system.</p>
            </div>
            <div className="skill-groups reveal delay-1" data-testid="list-technical-skills">
              {skills.map(([name, detail]) => (
                <div className="skill-group" key={name}>
                  <h3>{name}</h3>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section credentials-section" data-testid="section-credentials">
        <div className="container-wide credentials-layout">
          <div className="credential-column reveal">
            <h3>Education</h3>
            <ul className="credential-list">
              <li><span>MS Computer Science</span><span>GPA 3.96 / 4.00</span></li>
              <li><span>Saint Francis College</span><span>New York</span></li>
            </ul>
          </div>
          <div className="credential-column reveal delay-1">
            <h3>Certifications & simulations</h3>
            <div className="certification-list">
              {certifications.map((certification) => (
                <a className="certification-card" href={certification.href} target="_blank" rel="noreferrer" key={certification.title + certification.issuer}>
                  <div className="certification-topline">
                    <span>{certification.date}</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </div>
                  <strong>{certification.title}</strong>
                  <span className="certification-issuer">{certification.issuer}</span>
                  <p>{certification.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container-wide contact-section" data-testid="section-contact">
        <div className="eyebrow reveal">05 / open channel</div>
        <h2 className="reveal delay-1">Let's build the<br /><em>next signal.</em></h2>
        <p className="reveal delay-2">Have a difficult system, an ambitious product, or a question worth unpacking? I would like to hear what you are working on.</p>
        <div className="contact-actions reveal delay-3">
          <a className="button-primary" href="mailto:dhanushindla03@gmail.com" data-testid="link-email">
            Start a conversation <Mail size={15} />
          </a>
          <a className="button-quiet" href="tel:+15513969765" data-testid="link-phone">
            <Phone size={14} /> +1 551 396 9765
          </a>
        </div>
      </section>

      <footer className="container-wide footer" data-testid="site-footer">
        <span>© {new Date().getFullYear()} Dhanush Indla / Intelligent systems, thoughtfully deployed.</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="link-linkedin"><Linkedin size={15} /></a>
           <a href="https://github.com/Dhanush-Varma" target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="link-github"><Github size={15} /></a>
           <a href="mailto:dhanushindla03@gmail.com" aria-label="Email" data-testid="link-footer-email"><Mail size={15} /></a>
          <a href={resumePath} download aria-label="Download resume" data-testid="link-footer-resume"><ExternalLink size={15} /></a>
          <a href="#top" aria-label="Back to top" data-testid="link-back-to-top"><ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </main>
  );
}

export default App;