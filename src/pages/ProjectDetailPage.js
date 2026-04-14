import { Link, Navigate, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projectsData';
import { publicAsset } from '../publicAsset';
import styles from './ProjectDetailPage.module.css';

function SectionBody({ text }) {
  if (!text) return null;
  const blocks = text.split(/\n\n/).filter(Boolean);
  return blocks.map((block, i) => (
    <p key={i} className={styles.sectionBody}>
      {block}
    </p>
  ));
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const heroSrc = publicAsset(project.imagePath);

  return (
    <section className={styles.root} aria-labelledby="project-detail-title">
      <div className={styles.inner}>
        <Link to="/projects" className={styles.backLink}>
          ← Back to Projects
        </Link>
      </div>

      <div className={styles.heroWrap}>
        <img src={heroSrc} alt="" className={styles.heroImg} width={1200} />
      </div>

      <div className={styles.bodyInner}>
        <h1 id="project-detail-title" className={styles.title}>
          {project.title}
        </h1>

        <ul className={styles.tools} aria-label="Tools">
          {project.tools.map((tool) => (
            <li key={tool} className={styles.toolPill}>
              {tool}
            </li>
          ))}
        </ul>

        <hr className={styles.divider} />

        <section className={styles.section} aria-labelledby="overview-heading">
          <h2 id="overview-heading" className={styles.sectionTitle}>
            Overview
          </h2>
          <SectionBody text={project.overview} />
        </section>

        <section className={styles.section} aria-labelledby="problem-heading">
          <h2 id="problem-heading" className={styles.sectionTitle}>
            The Problem
          </h2>
          <SectionBody text={project.problem} />
        </section>

        <section className={styles.section} aria-labelledby="approach-heading">
          <h2 id="approach-heading" className={styles.sectionTitle}>
            {project.approachSectionTitle || 'Approach'}
          </h2>
          <SectionBody text={project.approach} />
        </section>

        <section className={styles.section} aria-labelledby="results-heading">
          <h2 id="results-heading" className={styles.sectionTitle}>
            Results
          </h2>
          <SectionBody text={project.results} />
        </section>

        {project.metricsLine ? (
          <section className={styles.section} aria-labelledby="metrics-heading">
            <h2 id="metrics-heading" className={styles.sectionTitle}>
              Metrics
            </h2>
            <p className={styles.metricsLine}>
              <strong>{project.metricsLine}</strong>
            </p>
          </section>
        ) : null}

        <section className={styles.section} aria-labelledby="links-heading">
          <h2 id="links-heading" className={styles.sectionTitle}>
            Links
          </h2>
          <div className={styles.linksRow}>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                className={styles.btnOutline}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            ) : null}
            {project.liveDemoUrl && project.liveDemoLabel ? (
              <a
                href={project.liveDemoUrl}
                className={styles.btnPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.liveDemoLabel}
              </a>
            ) : null}
            {project.tableauUrl ? (
              <a
                href={project.tableauUrl}
                className={styles.btnOutline}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tableau
              </a>
            ) : null}
          </div>
        </section>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
