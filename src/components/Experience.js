import styles from './Experience.module.css';

const experiences = [
  {
    company: 'The Benevolent Bandwidth',
    title: 'Contributor | Developer',
    date: 'Feb 2026 - Present | Remote',
    skills: [
      'Python',
      'Kotlin',
      'ML Kit',
      'Android SDK',
      'ETL',
      'Unit Testing',
    ],
    bullets: [
      'Built an end-to-end OCR pipeline for an open-source Android ingredient scanner using ML Kit Text Recognition v2 and Kotlin, replacing a stubbed flow with live on-device inference',
      'Designed OcrEngine, OcrNormalizer, and OcrResult components following an ETL pattern; built a rules-based NOVA classifier covering 30+ ultra-processing markers',
      'Sourced and cleaned a 400+ product dataset from Open Food Facts API with multi-language translation; wrote 9 unit tests catching 2 regressions during development',
    ],
  },
  {
    company: 'Miuul',
    title: 'Data Analyst',
    date: 'Nov 2023 - Feb 2024 | Remote',
    skills: ['Python', 'SQL', 'Scikit-learn', 'Tableau', 'Machine Learning'],
    bullets: [
      'Developed ML models (logistic regression, decision trees) for churn prediction, improving retention by 15% with 85% accuracy',
      'Analyzed customer behavior patterns using Python and SQL to inform pricing strategy and retention decisions for sales leadership',
    ],
  },
  {
    company: 'Elmas Enterprise',
    title: 'Data Analyst Intern',
    date: 'Sept 2022 - May 2023 | Boston, MA',
    skills: ['SQL', 'Python', 'Power BI', 'K-means Clustering', 'ETL'],
    bullets: [
      'Engineered data pipelines using SQL and Python for route optimization, reducing delivery distances by 10%',
      'Applied k-means clustering for targeted marketing campaigns, driving 5% sales increase and 8% improvement in customer loyalty',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.inner}>
        <h2 id="experience-heading" className={styles.heading}>
          Experience
        </h2>

        <ol className={styles.timeline}>
          {experiences.map((job) => (
            <li key={job.company} className={styles.item}>
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.dot} />
              </div>
              <article className={styles.card}>
                <h3 className={styles.company}>{job.company}</h3>
                <p className={styles.jobTitle}>{job.title}</p>
                <p className={styles.date}>{job.date}</p>
                <ul className={styles.skills} aria-label="Skills">
                  {job.skills.map((skill) => (
                    <li key={skill} className={styles.pill}>
                      {skill}
                    </li>
                  ))}
                </ul>
                <ul className={styles.bullets}>
                  {job.bullets.map((text) => (
                    <li key={text} className={styles.bullet}>
                      {text}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
