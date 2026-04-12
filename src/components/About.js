import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <h2 id="about-heading" className={styles.heading}>
          About
        </h2>
        <p className={styles.text}>
          I am a data and analytics engineer focused on turning messy sources into clear metrics,
          forecasts, and dashboards people can trust. I care about the full path from extraction
          and modeling to how numbers show up in front of decision-makers.
        </p>
      </div>
    </section>
  );
}

export default About;
