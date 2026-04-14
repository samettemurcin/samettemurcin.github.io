import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/projects' },
];

function isNavItemActive(to, location) {
  if (to === '/projects') {
    return location.pathname === '/projects';
  }
  if (to.startsWith('/#')) {
    const id = to.slice(2);
    return location.pathname === '/' && location.hash === `#${id}`;
  }
  return false;
}

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.hash, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const linkClass = (to) => {
    const active = isNavItemActive(to, location);
    return active ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
  };

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          Samet Temurcin
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <IoClose size={22} /> : <FaBars size={20} />}
        </button>

        <nav
          className={menuOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}
          aria-label="Primary"
        >
          <ul className={styles.navList}>
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className={linkClass(to)} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/Samet_Temurcin_Resume.pdf"
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
