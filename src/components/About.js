import styles from './About.module.css';
import { publicAsset } from '../publicAsset';

function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <div className={styles.profileWrap}>
          <img
            src={publicAsset('/images/A59A5418.JPG')}
            alt="Samet Temurcin"
            className={styles.profilePhoto}
            width={120}
            height={120}
          />
        </div>
        <h2 id="about-heading" className={styles.heading}>
          About me
        </h2>
        <div className={styles.body}>
          <p className={styles.text}>
            Hi, I&apos;m Samet, a Data &amp; Analytics Engineer based in Boston, currently pursuing my
            Master&apos;s in Data Analytics Engineering at Northeastern University. I build ETL
            pipelines, data ingestion workflows, validation logic, and analytics dashboards using
            Python and SQL. I work across relational schemas, document stores, and graph databases,
            turning raw sources into clean datasets that teams can query, model, and act on. On the
            modeling side, I&apos;ve deployed machine learning pipelines for churn prediction,
            customer segmentation, and time series forecasting, and worked with PyTorch and TensorFlow
            on computer vision and NLP projects.
          </p>
          <p className={styles.text}>
            I&apos;ve delivered end-to-end projects across professional, open-source, and academic
            environments. I document everything: pipeline logic, data flows, methodology, and
            implementation details. I want the next person who picks up my work to understand it
            without needing to ask me.
          </p>
          <p className={styles.text}>
            My background in Industrial Engineering shapes how I think. I look at the full system
            first, where data enters, where it breaks, and what the output needs to do, before writing
            a single line of code. I work well in team-based delivery settings and I&apos;m
            comfortable with cloud infrastructure including Google Colab and Google Cloud.
          </p>
          <p className={styles.text}>US Permanent Resident. No sponsorship required.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
