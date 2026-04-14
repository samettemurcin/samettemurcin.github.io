import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.name}>Samet Temurcin</p>
          <p className={styles.title}>Data &amp; Analytics Engineer</p>
          <div className={styles.socialRow}>
            <a
              href="https://github.com/samettemurcin"
              className={`${styles.socialLink} ${styles.socialGithub}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className={styles.socialIcon} />
            </a>
            <a
              href="https://linkedin.com/in/samet-temurcin"
              className={`${styles.socialLink} ${styles.socialLinkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className={styles.socialIcon} />
            </a>
            <a
              href="mailto:temurcin.s@northeastern.edu"
              className={`${styles.socialLink} ${styles.socialGmail}`}
              aria-label="Email"
            >
              <SiGmail className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <nav className={styles.right} aria-label="Footer">
          <Link to="/#about" className={styles.footerLink}>
            About
          </Link>
          <Link to="/projects" className={styles.footerLink}>
            Projects
          </Link>
          <a
            href="/Samet_Temurcin_Resume.pdf"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
