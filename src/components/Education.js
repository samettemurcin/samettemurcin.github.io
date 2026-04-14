import styles from './Education.module.css';
import { publicAsset } from '../publicAsset';

const entries = [
  {
    logoSrc: publicAsset('/images/Northeastern University.png'),
    university: 'Northeastern University',
    degree: 'Master of Science in Data Analytics Engineering',
    location: 'Boston, MA',
    date: 'Jan 2025 - Expected Jan 2027',
    courses:
      'Foundations for Data Analytics Engineering, Data Management for Analytics, Computation and Visualization for Analytics, Data Mining in Engineering, Deep Learning for AI',
  },
  {
    logoSrc: publicAsset('/images/images.png'),
    university: 'Gaziantep University',
    degree: 'Bachelor of Engineering in Industrial Engineering',
    location: 'Gaziantep, Turkey',
    date: 'Sept 2015 - Jun 2019',
    courses:
      'Computer Programming, Introduction to Probability, Introduction to Statistics, Engineering Economy and Cost Analysis',
  },
];

function Education() {
  return (
    <section id="education" className={styles.section} aria-labelledby="education-heading">
      <div className={styles.inner}>
        <h2 id="education-heading" className={styles.heading}>
          Education
        </h2>
        <ul className={styles.list}>
          {entries.map((entry) => (
            <li key={entry.university} className={styles.listItem}>
              <article className={styles.card}>
                <div className={styles.logo}>
                  <img
                    src={entry.logoSrc}
                    alt=""
                    className={styles.logoImg}
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.school}>{entry.university}</h3>
                  <p className={styles.degree}>{entry.degree}</p>
                  <p className={styles.meta}>
                    {entry.location}
                    <span className={styles.metaSep}> · </span>
                    {entry.date}
                  </p>
                  <p className={styles.coursesLabel}>Related Courses</p>
                  <p className={styles.courses}>{entry.courses}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Education;
