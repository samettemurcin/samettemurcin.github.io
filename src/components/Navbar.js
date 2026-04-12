import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logoLink} aria-label="Samet Temurcin, home">
          <span className={styles.logoMark}>ST</span>
          <span className={styles.logoName}>Samet Temurcin</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            <li>
              <Link to="/#about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li>
              <Link to="/#experience" className={styles.navLink}>
                Experience
              </Link>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <Link to="/#skills" className={styles.navLink}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/#contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <a
          href="/resume.pdf"
          className={styles.resumeBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;
