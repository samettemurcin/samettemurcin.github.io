import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {new Date().getFullYear()} Samet Temurcin</p>
        <nav className={styles.nav} aria-label="Footer">
          <Link to="/" className={styles.footerLink}>
            Home
          </Link>
          <Link to="/projects" className={styles.footerLink}>
            Projects
          </Link>
          <a
            className={styles.footerLink}
            href="https://github.com/samettemurcin"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
