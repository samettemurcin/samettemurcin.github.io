import styles from './Volunteering.module.css';
import { publicAsset } from '../publicAsset';

const bullets = [
  'Coordinate and execute cultural, networking, and professional development events for 850+ students across New England universities',
  'Lead cross-functional teams of 8-12 volunteers to plan large-scale events including career panels and community outreach programs with 250-550 attendees',
  'Manage event budgets, vendor relationships, and logistics, keeping all moving parts on track from planning to execution',
  'Build partnerships with university administration and local organizations to expand NETSA\'s reach and create networking opportunities for the Turkish student community',
];

function Volunteering() {
  return (
    <section id="volunteering" className={styles.section} aria-labelledby="volunteering-heading">
      <div className={styles.inner}>
        <h2 id="volunteering-heading" className={styles.heading}>
          Volunteering
        </h2>
        <article className={styles.card}>
          <div className={styles.logo}>
            <img
              src={publicAsset('/images/Netsa.png')}
              alt=""
              className={styles.logoImg}
              width={48}
              height={48}
            />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.org}>New England Turkish Student Association (NETSA)</h3>
            <p className={styles.role}>Event Coordinator</p>
            <p className={styles.meta}>
              Boston, MA
              <span className={styles.metaSep}> · </span>
              Jan 2025 - Present
            </p>
            <ul className={styles.bullets}>
              {bullets.map((text) => (
                <li key={text} className={styles.bullet}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Volunteering;
