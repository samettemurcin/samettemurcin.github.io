import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <h2 id="contact-heading" className={styles.heading}>
          Contact
        </h2>
        <p className={styles.lede}>
          Reach out for collaborations, data work, or a conversation about analytics and engineering.
        </p>
        <ul className={styles.links}>
          <li>
            <a className={styles.link} href="mailto:temurcin.s@northeastern.edu">
              temurcin.s@northeastern.edu
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://linkedin.com/in/samet-temurcin"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/samet-temurcin
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://github.com/samettemurcin"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/samettemurcin
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
