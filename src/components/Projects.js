import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import { publicAsset } from '../publicAsset';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <h1 id="projects-heading" className={styles.heading}>
          Projects
        </h1>

        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.slug} className={styles.gridItem}>
              <article className={styles.card}>
                <Link
                  to={`/projects/${project.slug}`}
                  className={styles.stretchedLink}
                  aria-label={`View project: ${project.title}`}
                >
                  <span className={styles.srOnly}>View project: {project.title}</span>
                </Link>
                <div className={styles.cardClickBlock}>
                  <img
                    src={publicAsset(project.imagePath)}
                    alt=""
                    className={styles.cardThumb}
                    width={800}
                    height={200}
                  />
                  <div className={styles.accentBar} aria-hidden="true" />
                  <div className={styles.cardBody}>
                    <h2 className={styles.title}>{project.title}</h2>
                    <p className={styles.cardSummary}>{project.cardSummary}</p>
                    <ul className={styles.tools} aria-label="Tools">
                      {project.tools.map((tool) => (
                        <li key={tool} className={styles.toolPill}>
                          {tool}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.actions}>
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
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
