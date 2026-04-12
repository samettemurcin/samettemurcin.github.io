import styles from './Projects.module.css';

/* GitHub URLs for wfh-analysis, patent-distribution-analysis, and housing-market-analysis are
   placeholders until those repositories exist (create them when ready). */

const projects = [
  {
    title: 'Object Detection Attendance System',
    tools: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Gradio'],
    situation:
      'Traditional attendance systems rely on facial recognition, raising serious privacy concerns in academic settings.',
    task: 'Build a privacy-first attendance system for 39 students that identifies people by their personal objects instead of their faces.',
    action:
      'Auto-annotated bounding boxes using OpenCV contour detection and GrabCut. Generated 4,000+ synthetic grid images for training. Trained YOLOv8s on 39 custom object classes. Ran a full model comparison — SimpleMLP, BasicCNN, DeeperCNN, and ResNet18 — to find the best classifier. Deployed a live Gradio web app for real-time check-ins.',
    result:
      '95.2% mAP@0.5 and 92.3% recall on detection. ResNet18 reached 99.84% classification accuracy — 1 wrong prediction out of 617 — while outperforming DeeperCNN which had 8.7x more parameters. More complexity didn\'t win. Better architecture did.',
    metrics: '95.2% mAP@0.5 | 99.84% accuracy | 39 classes | 4,000+ training images',
    githubUrl: 'https://github.com/samettemurcin/Object-Detection-Attendance',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl: null,
  },
  {
    title: 'LA County Socioeconomic Data Platform',
    tools: [
      'Python',
      'pandas',
      'NumPy',
      'SciPy',
      'SQL',
      'Tableau',
      'Streamlit',
      'Statistical Analysis',
    ],
    situation:
      'Los Angeles County has 274 zip codes with extreme socioeconomic inequality — a family in Agoura Hills earns 7x more than a family in Maywood, just 40 miles away.',
    task: 'Build a data platform that turns raw Census data into actionable insights for three audiences: residents, real estate investors, and policymakers.',
    action:
      'Pulled U.S. Census Bureau data for all 274 LA zip codes. Built a composite scoring system across five variables — median household income, education levels, housing affordability, public transit access, and population density. Ran correlation analysis to identify relationships between variables. Built an interactive Streamlit app and Tableau dashboards.',
    result:
      'Found that 71% of the county (5+ million residents) lives in areas scoring "Fair" or below. Identified an "Affluence Triad" — income, education, and housing values reinforce each other (r > 0.7), creating self-perpetuating geographic inequality. Education attainment ranged from 0% to 85% Bachelor\'s degree across zip codes. Dashboards support $80M+ policy targeting decisions.',
    metrics: '274 zip codes | 5M+ residents analyzed | 89% performance gap identified | r > 0.7 correlation',
    githubUrl: 'https://github.com/samettemurcin/S_CA_ZIP',
    liveDemoUrl: 'https://scazip-4jfzkxbhvotptfmtspzldv.streamlit.app/',
    liveDemoLabel: 'Streamlit App',
    tableauUrl:
      'https://public.tableau.com/app/profile/samet.temurcin4869/viz/LACountyCAZipCodeAnalysisFinalwithScores/POPULATIONANALYSISBYPRIMARYCITY',
  },
  {
    title: 'Work From Home vs. Back to Office Analysis',
    tools: [
      'Python',
      'pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Tableau',
      'Statistical Trend Analysis',
      'Time Series Visualization',
    ],
    situation:
      'After COVID forced the largest remote work experiment in history, companies and policymakers had conflicting signals about where work was actually heading.',
    task: 'Analyze 5+ years of workplace data across 14 industries to find the real trajectory of remote work — not the headlines, the data.',
    action:
      'Collected and cleaned 18 CSV datasets covering May 2020 to October 2025. Ran time series analysis on three work models (on-site, remote, hybrid) across 14 industry sectors. Built comparison dashboards in Python and Tableau to surface cross-sector patterns.',
    result:
      'Full on-site work increased from 54% to 64%. Full remote declined from 15% to 11%. Hybrid stabilized at 25%. IT and Finance held ~45% WFH rates while Hospitality and Manufacturing stayed below 15%. The most telling finding: companies are paying premium costs for office space when remote alternatives exist — a revealed preference that signals measurable value in physical collaboration.',
    metrics: '18 datasets | 14 industries | 5+ years | 34% variation across sectors',
    githubUrl: 'https://github.com/samettemurcin/wfh-analysis',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl:
      'https://public.tableau.com/app/profile/samet.temurcin4869/viz/WorkfromHome_17635340795170/NameHighvsLowWFH',
  },
  {
    title: 'U.S. Patent Distribution Analysis (2000–2015)',
    tools: ['Python', 'pandas', 'Tableau', 'Choropleth Mapping', 'Statistical Analysis'],
    situation:
      'USPTO patent data across hundreds of U.S. metro areas spans 16 years but was buried in raw Excel format with no way to see geographic patterns or track which regions were actually driving innovation.',
    task: 'Process the raw data and build a choropleth dashboard that makes regional patent concentration visible and comparable across time.',
    action:
      'Cleaned and restructured USPTO Excel data covering Metropolitan Statistical Areas from 2000 to 2015. Generated three analysis-ready datasets — patent.csv, state_patent.csv, and top_5.csv. Built an interactive Tableau choropleth map with regional filtering and year-over-year comparisons.',
    result:
      'Silicon Valley dominated — San Jose led all MSAs with 143,473 total patents, more than New York (92,577) and San Francisco (89,981) combined. Top 5 MSAs account for 35-40% of all U.S. patents. Tech hubs show 10-20x higher patent density than the median MSA. University cities like Boston-Cambridge punched above their weight, driven by MIT and Harvard research output. The map makes the coastal vs. inland innovation divide impossible to miss.',
    metrics: '16 years | 143,473 patents in top MSA | Top 5 = 35-40% of national total | 10-20x density gap',
    githubUrl: 'https://github.com/samettemurcin/patent-distribution-analysis',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl:
      'https://public.tableau.com/app/profile/samet.temurcin4869/viz/USPATENTDISTRIBUTIONANALYSIS2015/Dashboard1',
  },
  {
    title: 'Image-to-Text Generation with Vision Transformers',
    tools: [
      'Python',
      'PyTorch',
      'Transformers',
      'Jupyter Notebook',
      'Vision Transformers',
      'Language Models',
    ],
    situation:
      'Generating accurate natural language descriptions from images requires combining visual understanding with language generation — two separate model families working together.',
    task: 'Build and evaluate an image-to-text generation pipeline using Vision Transformers and language models on a real image dataset.',
    action:
      'Combined a Vision Transformer (ViT) encoder with a language model decoder to build an end-to-end image captioning pipeline. Processed and evaluated the model on benchmark image datasets. Documented architecture decisions, training setup, and evaluation results.',
    result:
      'Produced a working image-to-text generation system demonstrating the practical integration of computer vision and NLP. Full code, training pipeline, and findings documented in the repository.',
    metrics: 'End-to-end pipeline | ViT + LM architecture | Full evaluation documented',
    githubUrl: 'https://github.com/samettemurcin/Generative_Project-',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl: null,
  },
  {
    title: 'Open-Source Android Ingredient Scanner (OCR Pipeline)',
    tools: [
      'Kotlin',
      'ML Kit Text Recognition v2',
      'Android SDK',
      'Python',
      'Open Food Facts API',
      'ETL',
      'Unit Testing',
    ],
    situation:
      'An open-source Android app needed a working ingredient scanner, but the analysis pipeline was fully stubbed — no real on-device inference was happening.',
    task: 'Replace the stub with a live OCR pipeline that reads real product labels, classifies ingredients, and returns a food safety verdict on-device.',
    action:
      'Built OcrEngine, OcrNormalizer, and OcrResult components following an ETL pattern. Developed a rules-based NOVA classifier (groups 1-4) covering 30+ ultra-processing markers to return Red / Yellow / Green verdicts. Sourced and cleaned a 400+ product dataset from the Open Food Facts API with multi-language auto-translation. Wrote 9 unit tests across OCR normalization and classification logic.',
    result:
      'Replaced a fully stubbed flow with live on-device inference. Unit tests caught 2 regressions during development. The NOVA classifier handles 30+ markers across multiple languages in real time on Android.',
    metrics: '400+ products | 30+ NOVA markers | 9 unit tests | 2 regressions caught',
    githubUrl: 'https://github.com/samettemurcin/ultraprocessed',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl: null,
  },
  {
    title: 'U.S. Housing Market Trends Analysis (2005–2025)',
    tools: [
      'Python',
      'pandas',
      'Tableau',
      'ARIMA',
      'Time Series Analysis',
      'Statistical Forecasting',
    ],
    situation:
      'The U.S. housing market went through two major crises in 20 years — the 2008 Financial Crisis and COVID-19 — but most analyses treated them as isolated events rather than part of a longer structural pattern.',
    task: 'Build a 20-year longitudinal analysis platform covering home prices, mortgage rates, and sales volumes to surface the real drivers of market movement across regions.',
    action:
      'Collected data from the Federal Reserve Economic Data (FRED) and U.S. Census Bureau. Cleaned and processed 20 years of housing data in Python. Applied ARIMA and trend decomposition for forecasting. Used median prices instead of averages to avoid luxury property distortion. Built Tableau dashboards with economic event annotations and multi-dimensional filtering.',
    result:
      'West Coast median prices hit $2.3M in 2022 vs. under $1.6M in the Midwest — a growing geographic wealth divide. COVID caused a 21% surge in home sales as rates hit 3%, then Fed rate increases to 8% caused a 45% plunge in new home sales — the strongest inverse correlation in the dataset. 2008 took 7+ years to recover. 2020 rebounded within months. The difference: monetary policy speed and scale.',
    metrics: '20 years | 4 regions | 45% sales plunge quantified | ARIMA forecasting applied',
    githubUrl: 'https://github.com/samettemurcin/housing-market-analysis',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl: null,
  },
];

function StarBlock({ situation, task, action, result }) {
  return (
    <div className={styles.star}>
      <p className={styles.starPara}>
        <strong className={styles.starLabel}>Situation:</strong> {situation}
      </p>
      <p className={styles.starPara}>
        <strong className={styles.starLabel}>Task:</strong> {task}
      </p>
      <p className={styles.starPara}>
        <strong className={styles.starLabel}>Action:</strong> {action}
      </p>
      <p className={styles.starPara}>
        <strong className={styles.starLabel}>Result:</strong> {result}
      </p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <h1 id="projects-heading" className={styles.heading}>
          Projects
        </h1>

        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.title} className={styles.gridItem}>
              <article className={styles.card}>
                <div className={styles.accentBar} aria-hidden="true" />
                <div className={styles.cardBody}>
                  <h2 className={styles.title}>{project.title}</h2>
                  <ul className={styles.tools} aria-label="Tools">
                    {project.tools.map((tool) => (
                      <li key={tool} className={styles.toolPill}>
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <StarBlock
                    situation={project.situation}
                    task={project.task}
                    action={project.action}
                    result={project.result}
                  />
                  <p className={styles.metrics}>{project.metrics}</p>
                  <div className={styles.actions}>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        className={styles.btnOutline}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    ) : null}
                    {project.liveDemoUrl && project.liveDemoLabel ? (
                      <a
                        href={project.liveDemoUrl}
                        className={styles.btnPrimary}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.liveDemoLabel}
                      </a>
                    ) : null}
                    {project.tableauUrl ? (
                      <a
                        href={project.tableauUrl}
                        className={styles.btnOutline}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tableau
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
