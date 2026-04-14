import styles from './Skills.module.css';

const lines = [
  {
    category: 'Programming & Databases',
    skills:
      'Python, pandas, NumPy, scikit-learn, PyTorch, TensorFlow, SQL (MySQL, PostgreSQL), MongoDB, Neo4j, Kotlin',
  },
  {
    category: 'Data Engineering',
    skills:
      'ETL Pipelines, Data Ingestion, Data Validation, Data Quality, Database Design, Data Modeling, Data Warehousing, Snowflake',
  },
  {
    category: 'Machine Learning & Analytics',
    skills:
      'Predictive Modeling, Classification, Clustering (K-means), Statistical Analysis, A/B Testing, ARIMA, Data Mining',
  },
  {
    category: 'Visualization & BI',
    skills: 'Tableau, Power BI, Matplotlib, Seaborn, Dashboard Development',
  },
  {
    category: 'Tools & Platforms',
    skills:
      'Git, Jupyter Notebook, Excel (Advanced), OpenCV, Gradio, ML Kit, Jetpack Compose, Google Colab, Google Cloud',
  },
  {
    category: 'Professional',
    skills:
      'Problem Solving, Critical Thinking, Team Collaboration, Cross-functional Communication, Documentation, Iterative Delivery',
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className={styles.inner}>
        <h2 id="skills-heading" className={styles.heading}>
          Skills
        </h2>
        <div className={styles.list}>
          {lines.map(({ category, skills }) => (
            <p key={category} className={styles.line}>
              <span className={styles.category}>{category}</span>
              <span className={styles.colon}>: </span>
              <span className={styles.skills}>{skills}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
