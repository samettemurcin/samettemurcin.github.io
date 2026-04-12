import styles from './Hero.module.css';

function HeroGraphic() {
  return (
    <div className={styles.graphicWrap} aria-hidden="true">
      <svg
        className={styles.graphic}
        viewBox="0 0 400 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0052CC" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0052CC" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <g opacity="0.14" stroke="#0052CC" strokeWidth="1">
          <line x1="40" y1="48" x2="360" y2="48" />
          <line x1="40" y1="104" x2="360" y2="104" />
          <line x1="40" y1="160" x2="360" y2="160" />
          <line x1="40" y1="216" x2="360" y2="216" />
          <line x1="40" y1="272" x2="360" y2="272" />
          <line x1="72" y1="32" x2="72" y2="288" />
          <line x1="152" y1="32" x2="152" y2="288" />
          <line x1="232" y1="32" x2="232" y2="288" />
          <line x1="312" y1="32" x2="312" y2="288" />
        </g>
        <rect
          x="56"
          y="196"
          width="28"
          height="76"
          rx="4"
          fill="#0052CC"
          opacity="0.22"
        />
        <rect
          x="104"
          y="156"
          width="28"
          height="116"
          rx="4"
          fill="#0052CC"
          opacity="0.32"
        />
        <rect
          x="152"
          y="124"
          width="28"
          height="148"
          rx="4"
          fill="#0052CC"
          opacity="0.42"
        />
        <rect
          x="200"
          y="172"
          width="28"
          height="100"
          rx="4"
          fill="#0052CC"
          opacity="0.28"
        />
        <rect
          x="248"
          y="88"
          width="28"
          height="184"
          rx="4"
          fill="#0052CC"
          opacity="0.38"
        />
        <path
          d="M 52 228 Q 120 140, 188 168 T 348 96"
          fill="none"
          stroke="#0052CC"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.45"
        />
        <circle cx="52" cy="228" r="6" fill="#0052CC" opacity="0.55" />
        <circle cx="188" cy="168" r="5" fill="#0052CC" opacity="0.5" />
        <circle cx="268" cy="132" r="5" fill="#0052CC" opacity="0.45" />
        <circle cx="348" cy="96" r="6" fill="#0052CC" opacity="0.6" />
        <polygon
          points="300,40 360,100 300,160 240,100"
          fill="url(#heroGrad)"
          stroke="#0052CC"
          strokeWidth="1.5"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Data &amp; Analytics</p>
          <h1 id="hero-heading" className={styles.title}>
            Samet Temurcin
          </h1>
          <p className={styles.role}>Data &amp; Analytics Engineer</p>
          <p className={styles.lede}>
            I build reliable data pipelines, clear reporting, and interactive analytics that help
            teams see what matters and act on it—from raw sources to dashboards stakeholders actually
            use.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryCta}>
              Get in touch
            </a>
            <a href="#experience" className={styles.secondaryCta}>
              View experience
            </a>
          </div>
        </div>
        <HeroGraphic />
      </div>
    </section>
  );
}

export default Hero;
