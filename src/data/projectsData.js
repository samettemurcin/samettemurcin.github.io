/**
 * Single source for Projects grid and /projects/:slug detail pages.
 * Thumbnail files live under public/images/projects/
 */

export const projects = [
  {
    slug: 'android-scanner',
    title: 'Open-Source Android Ingredient Scanner (OCR Pipeline)',
    imagePath: '/images/projects/Open-Source Android Ingredient Scanner (OCR Pipeline).png',
    tools: ['Kotlin', 'ML Kit Text Recognition v2', 'Android SDK', 'Python', 'Open Food Facts API', 'ETL', 'Unit Testing'],
    cardSummary:
      'Replaced a stubbed ingredient analysis pipeline with a live on-device OCR system for an open-source Android app. Built a NOVA food classifier covering 30+ ultra-processing markers with 9 unit tests catching 2 regressions.',
    situation:
      'An open-source Android app needed a working ingredient scanner, but the analysis pipeline was fully stubbed - no real on-device inference was happening.',
    task: 'Replace the stub with a live OCR pipeline that reads real product labels, classifies ingredients, and returns a food safety verdict on-device.',
    action:
      'Built OcrEngine, OcrNormalizer, and OcrResult components following an ETL pattern. Developed a rules-based NOVA classifier (groups 1-4) covering 30+ ultra-processing markers to return Red / Yellow / Green verdicts. Sourced and cleaned a 400+ product dataset from the Open Food Facts API with multi-language auto-translation. Wrote 9 unit tests across OCR normalization and classification logic.',
    result:
      'Replaced a fully stubbed flow with live on-device inference. Unit tests caught 2 regressions during development. The NOVA classifier handles 30+ markers across multiple languages in real time on Android.',
    metrics: '400+ products | 30+ NOVA markers | 9 unit tests | 2 regressions caught',
    approachSectionTitle: 'Build Process',
    overview:
      'A live OCR pipeline built for The Benevolent Bandwidth, an open-source Android app that helps users understand what they are eating. The pipeline reads real product ingredient labels on-device, classifies them against a NOVA food processing framework, and returns a Red, Yellow, or Green safety verdict in real time with no network call required.',
    problem:
      'When I joined the project, the app\'s ingredient scanner was fully stubbed. It accepted input and returned placeholder results instead of real classifications. Users scanning a product received a response that had nothing to do with what was on the label.',
    approach:
      'I designed three components following an ETL pattern. OcrEngine extracts text from the camera feed using ML Kit Text Recognition v2. OcrNormalizer cleans and standardizes the raw output. OcrResult structures the data for classification. Keeping them separate made each one independently testable and straightforward to modify.\n\nThe classification layer is a rules-based NOVA classifier covering groups 1 through 4 and checking for 30 or more ultra-processing markers. To build and test it, I sourced a dataset of 400 or more products from the Open Food Facts API. The raw data came in multiple languages, so I added auto-translation before running classification. I wrote 9 unit tests covering normalization and classification logic, which caught 2 regressions before they reached the main branch.',
    results:
      'The stubbed pipeline was replaced with live on-device inference. The classifier runs entirely on the Android device with no network call for the verdict. The unit tests caught 2 regressions during development that would have broken classification in production. The dataset covers 400 or more real products across multiple languages and processing levels.',
    metricsLine: '400+ products | 30+ NOVA markers | 9 unit tests | 2 regressions caught',
    githubUrl: 'https://github.com/samettemurcin/ultraprocessed',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl: null,
  },
  {
    slug: 'object-detection',
    title: 'Object Detection Attendance System',
    imagePath: '/images/projects/ObJECT.png',
    tools: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Gradio'],
    cardSummary:
      'Built a privacy-first attendance system for 39 students that identifies personal objects instead of faces. Trained YOLOv8 on 4,000+ synthetic images, achieving 95.2% mAP@0.5 and 99.84% classification accuracy.',
    situation:
      'Traditional attendance systems rely on facial recognition, raising serious privacy concerns in academic settings.',
    task: 'Build a privacy-first attendance system for 39 students that identifies people by their personal objects instead of their faces.',
    action:
      'Auto-annotated bounding boxes using OpenCV contour detection and GrabCut. Generated 4,000+ synthetic grid images for training. Trained YOLOv8s on 39 custom object classes. Ran a full model comparison - SimpleMLP, BasicCNN, DeeperCNN, and ResNet18 - to find the best classifier. Deployed a live Gradio web app for real-time check-ins.',
    result:
      '95.2% mAP@0.5 and 92.3% recall on detection. ResNet18 reached 99.84% classification accuracy - 1 wrong prediction out of 617 - while outperforming DeeperCNN which had 8.7x more parameters. More complexity didn\'t win. Better architecture did.',
    metrics: '95.2% mAP@0.5 | 99.84% accuracy | 39 classes | 4,000+ training images',
    overview:
      'A privacy-first attendance system that tracks students by their personal objects rather than their faces. 39 students each registered a unique item, and the model learned to recognize that object in real time through a live Gradio web app. No biometric data was collected at any point.',
    problem:
      'Facial recognition systems create a data liability. Storing 39 biometric records means 39 legal responsibilities around protection and deletion. We needed attendance tracking that was just as reliable without collecting anything tied to a person\'s identity.',
    approach:
      'Each student uploaded 100 or more photos of their object from different angles and lighting conditions. I built an auto-annotation pipeline using OpenCV contour detection and GrabCut to generate bounding boxes automatically. From those photos I generated 4,000 or more synthetic grid images showing multiple objects in the same frame, which trained YOLOv8 to detect specific items inside a busy scene.\n\nBefore finalizing the model, I ran a full classification comparison across SimpleMLP, BasicCNN, DeeperCNN, and ResNet18. DeeperCNN had 8.7 times more parameters than BasicCNN and still performed worse. ResNet18 won with 99.84% accuracy on the classification task, which confirmed that architecture matters more than model size when the dataset is limited.',
    results:
      'The detection model reached 95.2% mAP@0.5 and 92.3% recall across all 39 classes. The classification model made 1 wrong prediction out of 617 test cases. The auto-annotation pipeline eliminated manual labeling entirely, and the system runs in real time on a standard machine without a dedicated GPU for inference.',
    metricsLine: '95.2% mAP@0.5 | 99.84% accuracy | 39 classes | 4,000+ training images',
    githubUrl: 'https://github.com/samettemurcin/Object-Detection-Attendance',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl: null,
  },
  {
    slug: 'image-to-text',
    title: 'Image-to-Text Generation with Vision Transformers',
    imagePath: '/images/projects/Image-to-Text Generation with Vision Transformers.png',
    tools: ['Python', 'PyTorch', 'Transformers', 'Vision Transformers', 'Jupyter Notebook'],
    cardSummary:
      'Built an end-to-end image captioning pipeline combining a Vision Transformer encoder with a language model decoder. Evaluated on benchmark datasets with full architecture documentation and reproducible training pipeline.',
    situation:
      'Generating accurate natural language descriptions from images requires combining visual understanding with language generation - two separate model families working together.',
    task: 'Build and evaluate an image-to-text generation pipeline using Vision Transformers and language models on a real image dataset.',
    action:
      'Combined a Vision Transformer (ViT) encoder with a language model decoder to build an end-to-end image captioning pipeline. Processed and evaluated the model on benchmark image datasets. Documented architecture decisions, training setup, and evaluation results.',
    result:
      'Produced a working image-to-text generation system demonstrating the practical integration of computer vision and NLP. Full code, training pipeline, and findings documented in the repository.',
    metrics: 'End-to-end pipeline | ViT + LM architecture | Full evaluation documented',
    overview:
      'An end-to-end image captioning pipeline that combines a Vision Transformer encoder with a language model decoder to generate natural language descriptions from image inputs. The project focuses on how the two model families connect in practice and where the pipeline breaks down.',
    problem:
      'Image captioning requires visual understanding and language generation to work together in a single forward pass. The challenge is not training each component in isolation but making the encoder produce representations that the decoder can actually use for coherent text generation.',
    approach:
      'I combined a pre-trained Vision Transformer as the encoder with a language model decoder. The ViT processes the image and produces patch embeddings, which are passed to the decoder as context for generation. I evaluated the pipeline on benchmark image datasets, tracked output quality across different image types, and documented architecture decisions including where design choices were made and what alternatives were considered. The full training pipeline and evaluation results are in the repository for reproducibility.',
    results:
      'The pipeline produced coherent descriptions from image inputs without extensive fine-tuning of either component. Evaluation surfaced clear performance patterns: the model handled structured scenes with distinct objects well and struggled more with abstract or ambiguous images. Full documentation in the repository covers architecture, training setup, and evaluation methodology.',
    metricsLine: 'End-to-end pipeline | ViT + LM architecture | Full evaluation and documentation',
    githubUrl: 'https://github.com/samettemurcin/Generative_Project-',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl: null,
  },
  {
    slug: 'wfh-analysis',
    title: 'Work From Home vs. Back to Office Analysis',
    imagePath: '/images/projects/Work From Home vs. Back to Office Analysis.png',
    tools: ['Python', 'pandas', 'Matplotlib', 'Seaborn', 'Tableau'],
    cardSummary:
      'Tracked remote work trends across 14 industries from May 2020 to October 2025 using 18 datasets. Found that full on-site work grew from 54% to 64% while full remote declined, with a 34% spread across sectors.',
    situation:
      'After COVID forced the largest remote work experiment in history, companies and policymakers had conflicting signals about where work was actually heading.',
    task: 'Analyze 5+ years of workplace data across 14 industries to find the real trajectory of remote work - not the headlines, the data.',
    action:
      'Collected and cleaned 18 CSV datasets covering May 2020 to October 2025. Ran time series analysis on three work models (on-site, remote, hybrid) across 14 industry sectors. Built comparison dashboards in Python and Tableau to surface cross-sector patterns.',
    result:
      'Full on-site work increased from 54% to 64%. Full remote declined from 15% to 11%. Hybrid stabilized at 25%. IT and Finance held ~45% WFH rates while Hospitality and Manufacturing stayed below 15%. The most telling finding: companies are paying premium costs for office space when remote alternatives exist - a revealed preference that signals measurable value in physical collaboration.',
    metrics: '18 datasets | 14 industries | 5+ years | 34% variation across sectors',
    overview:
      'A longitudinal analysis of remote work trends across 14 industries from May 2020 to October 2025, using 18 datasets to track how work models shifted after COVID and where each sector actually landed. The project includes time series analysis in Python and interactive Tableau dashboards for cross-sector comparison.',
    problem:
      'Between 2022 and 2023, reporting on remote work was contradictory. Return to office mandates were announced while employee surveys showed strong preference for hybrid or remote. Most of that debate relied on surveys and anecdotes rather than consistent longitudinal data tracked across industries over time.',
    approach:
      'I collected 18 CSV datasets covering on-site, remote, and hybrid work model distributions alongside COVID impact data and sector-level breakdowns for 14 industries. After cleaning and merging, I ran time series analysis to track month-by-month changes across the full study period. Python and Seaborn handled the analysis and exploratory visualizations, while Tableau handled the final interactive dashboards with industry filters, time period selectors, and side-by-side sector comparisons.',
    results:
      'Full on-site work increased from 54% to 64% over the study period. Full remote declined from 15% to 11%. Hybrid stabilized at around 25%. IT and Finance maintained WFH rates near 45% while Hospitality and Manufacturing stayed below 15%, a 34% spread across sectors. The most significant finding was cost-related: companies continued paying premium rates for physical office space despite functional remote infrastructure, which signals that in-person collaboration produces measurable business value that does not show up in preference surveys.',
    metricsLine: '18 datasets | 14 industries | 5+ years of data | 34% variation across sectors',
    githubUrl: 'https://github.com/samettemurcin/Work-From-Home-vs.-Back-to-Office',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl:
      'https://public.tableau.com/app/profile/samet.temurcin4869/viz/WorkfromHome_17635340795170/NameHighvsLowWFH',
  },
  {
    slug: 'patent-analysis',
    title: 'U.S. Patent Distribution Analysis (2000\u20132015)',
    imagePath:
      '/images/projects/U.S. Patent Distribution Analysis (2000\u20132015) Python pandas Tableau  png.png',
    tools: ['Python', 'pandas', 'Tableau', 'Choropleth Mapping'],
    cardSummary:
      'Processed 16 years of USPTO patent data across hundreds of U.S. metro areas and built a Tableau choropleth map. San Jose led all regions with 143,473 total patents, with the top 5 MSAs accounting for 35-40% of national output.',
    situation:
      'USPTO patent data across hundreds of U.S. metro areas spans 16 years but was buried in raw Excel format with no way to see geographic patterns or track which regions were actually driving innovation.',
    task: 'Process the raw data and build a choropleth dashboard that makes regional patent concentration visible and comparable across time.',
    action:
      'Cleaned and restructured USPTO Excel data covering Metropolitan Statistical Areas from 2000 to 2015. Generated three analysis-ready datasets - patent.csv, state_patent.csv, and top_5.csv. Built an interactive Tableau choropleth map with regional filtering and year-over-year comparisons.',
    result:
      'Silicon Valley dominated - San Jose led all MSAs with 143,473 total patents, more than New York (92,577) and San Francisco (89,981) combined. Top 5 MSAs account for 35-40% of all U.S. patents. Tech hubs show 10-20x higher patent density than the median MSA. University cities like Boston-Cambridge punched above their weight, driven by MIT and Harvard research output. The map makes the coastal vs. inland innovation divide impossible to miss.',
    metrics: '16 years | 143,473 patents in top MSA | Top 5 = 35-40% of national total | 10-20x density gap',
    overview:
      'A geographic analysis of U.S. patent activity across Metropolitan Statistical Areas from 2000 to 2015, built to show where innovation was actually concentrated and how that concentration changed over 16 years. The core output is an interactive Tableau choropleth map with regional filters and year-over-year comparisons.',
    problem:
      'The USPTO publishes detailed patent data by region, but it comes in raw Excel format spanning hundreds of rows and 16 yearly columns. There was no way to see geographic patterns, compare regions, or track how concentration shifted over time without processing the data first.',
    approach:
      'I loaded and cleaned the raw USPTO Excel file covering all Metropolitan Statistical Areas from 2000 through 2015. After restructuring, I generated three output datasets: patent.csv with totals by MSA, state_patent.csv aggregated at the state level, and top_5.csv isolating the five highest-performing regions. These became the data sources for the Tableau dashboard. The choropleth map uses color intensity to show concentration by region, with year filters that let you track how Silicon Valley\'s dominance grew from 2010 onward.',
    results:
      'San Jose led all MSAs with 143,473 total patents across the 16-year period, more than New York (92,577) and San Francisco (89,981) combined. The top 5 MSAs accounted for 35 to 40% of all U.S. patents. Tech hubs showed 10 to 20 times higher patent density than the median MSA. Boston ranked 5th nationally with 62,653 patents, driven by MIT and Harvard research output. The coastal versus inland divide is clear in the data and becomes more pronounced after 2010.',
    metricsLine: '16 years of data | 143,473 patents in top MSA | Top 5 = 35-40% of national total | 10-20x density gap',
    githubUrl: 'https://github.com/samettemurcin/US-Patent-Distribution-Analysis',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl:
      'https://public.tableau.com/app/profile/samet.temurcin4869/viz/USPATENTDISTRIBUTIONANALYSIS2015/Dashboard1',
  },
  {
    slug: 'housing-market',
    title: 'U.S. Housing Market Trends Analysis (2005\u20132025)',
    imagePath: '/images/projects/U.S. Housing Market Trends Analysis (2005\u20132025).png',
    tools: ['Python', 'pandas', 'Tableau', 'ARIMA', 'Time Series Analysis'],
    cardSummary:
      'Built a 20-year longitudinal analysis of U.S. home prices, mortgage rates, and sales volumes using FRED and Census data. Quantified a 45% drop in new home sales after Fed rate increases and compared 2008 vs. 2020 crisis recovery patterns.',
    situation:
      'The U.S. housing market went through two major crises in 20 years - the 2008 Financial Crisis and COVID-19 - but most analyses treated them as isolated events rather than part of a longer structural pattern.',
    task: 'Build a 20-year longitudinal analysis platform covering home prices, mortgage rates, and sales volumes to surface the real drivers of market movement across regions.',
    action:
      'Collected data from the Federal Reserve Economic Data (FRED) and U.S. Census Bureau. Cleaned and processed 20 years of housing data in Python. Applied ARIMA and trend decomposition for forecasting. Used median prices instead of averages to avoid luxury property distortion. Built Tableau dashboards with economic event annotations and multi-dimensional filtering.',
    result:
      'West Coast median prices hit $2.3M in 2022 vs. under $1.6M in the Midwest - a growing geographic wealth divide. COVID caused a 21% surge in home sales as rates hit 3%, then Fed rate increases to 8% caused a 45% plunge in new home sales - the strongest inverse correlation in the dataset. 2008 took 7+ years to recover. 2020 rebounded within months. The difference: monetary policy speed and scale.',
    metrics: '20 years | 4 regions | 45% sales plunge quantified | ARIMA forecasting applied',
    overview:
      'A 20-year longitudinal study of the U.S. housing market covering home prices, mortgage rates, and sales volumes across four major regions. The project focuses on two economic crises, the 2008 Financial Crisis and COVID-19, and quantifies exactly how different their impact and recovery patterns were.',
    problem:
      'Most housing market analysis either focuses on a single crisis or uses national averages that hide regional variation. The 2008 and 2020 crises produced very different market responses, but most reporting treated them as comparable events. I wanted to use 20 years of data to show what actually drove the difference.',
    approach:
      'I collected data from the Federal Reserve Economic Data (FRED) database and the U.S. Census Bureau covering home prices, mortgage rates, new home sales, and regional breakdowns from 2005 through 2025. After cleaning in Python, I applied ARIMA modeling and trend decomposition to isolate seasonal patterns and project forward trends.\n\nFor price analysis I used median prices throughout rather than averages. In a market where luxury properties can cost 10 to 20 times the median home, mean prices pull significantly upward and misrepresent what most buyers face. The Tableau dashboards include economic event annotations marking the 2008 crash, the COVID shock, and the Fed rate hike cycle from 2022, with filters for region, time period, and housing metric.',
    results:
      'West Coast median prices reached $2.3M in 2022 compared to under $1.6M in the Midwest, a gap that widened significantly after 2015. When COVID hit in 2020, home sales surged 21% as mortgage rates dropped near 3%. When the Fed raised rates from 3% to 8% between 2022 and 2024, new home sales dropped 45%, the strongest inverse correlation in the dataset. The 2008 crisis took more than 7 years to recover. The 2020 shock rebounded within months. The difference was monetary policy speed: in 2008 the Fed moved slowly, in 2020 it moved immediately.',
    metricsLine: '20 years of data | 4 regions | 45% sales plunge quantified | ARIMA forecasting applied',
    githubUrl: 'https://github.com/samettemurcin/U.S.Housing-Market-Analysis',
    liveDemoUrl: null,
    liveDemoLabel: null,
    tableauUrl: null,
  },
  {
    slug: 'la-county',
    title: 'LA County Socioeconomic Data Platform',
    imagePath: '/images/projects/LA .png',
    tools: ['Python', 'pandas', 'NumPy', 'SciPy', 'SQL', 'Tableau', 'Streamlit'],
    cardSummary:
      'Analyzed socioeconomic conditions across all 274 LA County zip codes using U.S. Census Bureau data. Built a composite scoring system and interactive Streamlit app revealing that 71% of the county scores Fair or below.',
    situation:
      'Los Angeles County has 274 zip codes with extreme socioeconomic inequality - a family in Agoura Hills earns 7x more than a family in Maywood, just 40 miles away.',
    task: 'Build a data platform that turns raw Census data into actionable insights for three audiences: residents, real estate investors, and policymakers.',
    action:
      'Pulled U.S. Census Bureau data for all 274 LA zip codes. Built a composite scoring system across five variables - median household income, education levels, housing affordability, public transit access, and population density. Ran correlation analysis to identify relationships between variables. Built an interactive Streamlit app and Tableau dashboards.',
    result:
      'Found that 71% of the county (5+ million residents) lives in areas scoring "Fair" or below. Identified an "Affluence Triad" - income, education, and housing values reinforce each other (r > 0.7), creating self-perpetuating geographic inequality. Education attainment ranged from 0% to 85% Bachelor\'s degree across zip codes. Dashboards support $80M+ policy targeting decisions.',
    metrics: '274 zip codes | 5M+ residents analyzed | 89% performance gap identified | r > 0.7 correlation',
    overview:
      'An interactive data platform analyzing socioeconomic conditions across all 274 zip codes in Los Angeles County. Built for three audiences: residents comparing neighborhoods, real estate investors identifying undervalued markets, and policymakers targeting interventions. The output is a composite score per zip code backed by Census Bureau data and visualized through a Streamlit app and Tableau dashboards.',
    problem:
      'A family in Agoura Hills earns 7 times more than a family in Maywood 40 miles away. The data to understand that gap existed, but it was spread across multiple Census tables in formats that made comparison across 274 zip codes nearly impossible without significant processing work first.',
    approach:
      'I pulled income, education, housing affordability, public transit access, and population density data for all 274 LA zip codes from the U.S. Census Bureau. After cleaning and standardizing each variable, I built a composite scoring system that weights each factor and produces a single desirability score per zip code. I then ran correlation analysis across all five variables to identify which ones moved together and by how much.\n\nThe Streamlit app lets users filter zip codes by score range, view individual breakdowns, and compare neighborhoods side by side. The Tableau dashboards show the geographic distribution of scores across the county and highlight where the sharpest gaps are.',
    results:
      '71% of the county, covering more than 5 million residents, scored Fair or below. The correlation analysis identified what I called the Affluence Triad: income, education, and housing values all correlate above r = 0.7, meaning high performance in one almost always comes with high performance in all three. Education attainment ranged from 0% to 85% Bachelor\'s degree across zip codes in the same county. The platform supports policy targeting decisions involving more than $80 million in planned interventions.',
    metricsLine: '274 zip codes | 5M+ residents analyzed | 89% performance gap | r > 0.7 correlation',
    githubUrl: 'https://github.com/samettemurcin/S_CA_ZIP',
    liveDemoUrl: 'https://scazip-4jfzkxbhvotptfmtspzldv.streamlit.app/',
    liveDemoLabel: 'Streamlit App',
    tableauUrl:
      'https://public.tableau.com/app/profile/samet.temurcin4869/viz/LACountyCAZipCodeAnalysisFinalwithScores/POPULATIONANALYSISBYPRIMARYCITY',
  },
];

export function getProjectBySlug(slug) {
  const found = projects.find((p) => p.slug === slug);
  return found === undefined ? null : found;
}
