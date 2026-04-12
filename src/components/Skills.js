import styles from './Skills.module.css';

const skillGroups = [
  {
    label: 'Languages & core',
    items: ['Python', 'SQL', 'Kotlin', 'R'],
  },
  {
    label: 'Data & ML',
    items: ['pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'ETL pipelines', 'Time series'],
  },
  {
    label: 'Visualization & apps',
    items: ['Tableau', 'Power BI', 'Streamlit', 'Gradio'],
  },
  {
    label: 'Engineering',
    items: ['OpenCV', 'Android SDK', 'Unit testing', 'Git'],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className={styles.inner}>
        <h2 id="skills-heading" className={styles.heading}>
          Skills
        </h2>
        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.label} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.pills} aria-label={group.label}>
                {group.items.map((item) => (
                  <li key={item} className={styles.pill}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
