export const profile = {
  // Keep the surname and final initial together when the animated hero wraps.
  name: 'Abhay Surya R',
  role: 'AI/ML engineering student building embedded security systems, applied ML pipelines, and prototype AI tools.',
  summary:
    'I focus on practical systems that connect software, hardware, and machine learning, from RFID access control prototypes to environmental forecasting pipelines and AI-assisted product workflows.',
  education: '3rd-year AI and ML engineering student at Sapthagiri NPS University',
  location: 'Bengaluru, IN',
  email: 'abhaysurya410@gmail.com',
  phone: '+91 8310894541',
  linkedin: 'https://www.linkedin.com/in/abhay-surya-r-70111737a',
  github: 'https://github.com/hawky245',
};

export const resume = {
  status: 'coming-soon',
  label: 'Resume Coming Soon',
  fileName: 'Abhay-Surya-R-Resume.pdf',
  href: '/resume/Abhay-Surya-R-Resume.pdf',
  note: 'A finalized PDF resume is not available yet. Drop the PDF at public/resume/Abhay-Surya-R-Resume.pdf later to enable this link without changing component code.',
};

export const repositories = {
  rfid: {
    status: 'public',
    label: 'View Repository',
    href: 'https://github.com/hawky245/rfid-gsm-home-security-system',
  },
  aqi: {
    status: 'public',
    label: 'View Repository',
    href: 'https://github.com/hawky245/aqi-prediction-system',
  },
  careerAi: {
    status: 'public',
    label: 'View Repository',
    href: 'https://github.com/hawky245/CareerPath-AI',
  },
  portfolio: { status: 'private', label: 'Portfolio Source Private', href: '' },
  elearning: {
    status: 'public',
    label: 'View Repository',
    href: 'https://github.com/hawky245/e-learning-platform-java',
  },
  electricityBilling: {
    status: 'public',
    label: 'View Repository',
    href: 'https://github.com/hawky245/electricity-billing-management-system',
  },
};

export const evidenceChips = [
  'RFID access control',
  'ML forecasting pipeline',
  'AI product prototype',
  'Arduino + C++ systems',
];

// Ordered to lead with AI/product work, then ML, then embedded systems proof.
export const projects = [
  {
    id: 'career-guidance-ai',
    title: 'CareerPath AI',
    status: 'Prototype / In Development',
    category: 'AI Product Prototype',
    priority: 'primary',
    summary:
      'Prototype career recommendation experience focused on user workflow, recommendation architecture, frontend interaction design, and system planning.',
    proof:
      'Implemented the product flow and system architecture direction, with AI deployment currently limited by API-related constraints.',
    limitation:
      'Prototype only — full AI integration is currently blocked by API-related limitations. The workflow and system design are documented as the implemented surface.',
    technologies: ['React', 'System Design', 'AI Workflow Design', 'Frontend UX', 'API Integration Planning'],
    repository: repositories.careerAi,
    gallery: [
      { type: 'screenshot', title: 'Career AI prototype screenshot coming soon', caption: 'Frontend workflow evidence slot.' },
      { type: 'diagram', title: 'API boundary diagram pending upload', caption: 'Architecture view documenting the blocked AI integration boundary.' },
    ],
    highlights: [
      'Career recommendation workflow designed',
      'Frontend experience prototyped',
      'System architecture documented',
      'API limitation stated clearly rather than hidden',
    ],
    details: {
      Problem:
        'Students often need structured career guidance that turns interests, skills, and goals into practical next steps. The challenge is designing a useful workflow while avoiding unsupported AI claims before integration is complete.',
      Solution:
        'Created a prototype product flow for collecting user inputs and shaping career recommendations, with frontend screens and architecture prepared for a future AI-backed integration.',
      Architecture:
        'The prototype separates user input, recommendation flow, frontend state, and the planned AI/API layer. The API boundary is intentionally documented because deployment could not be completed yet.',
      Challenges:
        'The main blocker is API-related deployment limitations. The current work focuses on UX flow, product logic, and integration architecture instead of pretending to be a fully deployed AI advisor.',
      'Lessons Learned':
        'This project demonstrates product thinking, scope control, and honest technical communication: prototypes are valuable when their implemented surface and blocked boundaries are explicit.',
    },
  },
  {
    id: 'aqi-predictor',
    title: 'ML AQI Predictor',
    status: 'Evaluation Pending',
    category: 'Machine Learning',
    priority: 'standard',
    summary:
      'Linear regression pipeline forecasting environmental trends using a 15-year Indian air quality dataset.',
    proof:
      'Designed a structured data-processing and modeling workflow for air-quality forecasting, with final validation metrics to be added after evaluation is complete.',
    limitation:
      'Evaluation metrics will be added after RMSE, MAE, dataset size, and model performance are validated.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Linear Regression'],
    repository: repositories.aqi,
    metrics: [
      { label: 'RMSE', value: 'Evaluation pending' },
      { label: 'MAE', value: 'Evaluation pending' },
      { label: 'Dataset Size', value: 'To be added' },
      { label: 'Model Performance', value: 'To be validated' },
    ],
    gallery: [
      { type: 'screenshot', title: 'AQI notebook output coming soon', caption: 'Notebook output and preprocessing evidence slot.' },
      { type: 'chart', title: 'Evaluation chart pending upload', caption: 'Final validation chart will be added after metrics are computed.' },
    ],
    highlights: [
      '15-year Indian air quality dataset focus',
      'Linear regression baseline',
      'Cleaning and preprocessing workflow',
      'Metric placeholders kept honest until evaluation is complete',
    ],
    details: {
      Problem:
        'Air-quality data is noisy, seasonal, and context-dependent. The project explores whether a lightweight regression baseline can forecast environmental trends with interpretable evaluation metrics.',
      Solution:
        'Built a Python-based regression workflow that prepares historical AQI data, trains a linear regression model, and reserves space for transparent validation once final metrics are available.',
      Architecture:
        'Dataset ingestion feeds preprocessing, feature selection, train/test splitting, model training, evaluation, and visualization outputs. The final page will show only measured results from this pipeline.',
      Challenges:
        'Important constraints include dataset quality, leakage-safe splitting, missing values, feature consistency across years, and communicating model performance without overstating accuracy.',
      'Lessons Learned':
        'The project emphasizes disciplined ML communication: show dataset context, explain preprocessing, publish real validation metrics, and avoid fake performance claims.',
    },
  },
  {
    id: 'rfid-smart-security',
    title: 'RFID Smart Security System',
    status: 'Built / Bench-tested',
    category: 'Embedded Security',
    priority: 'standard',
    summary:
      'Arduino-based physical access control system combining RFID authentication, motion detection, servo-controlled actuation, and SIM900A GSM integration testing.',
    proof:
      'Solved bidirectional gate motor constraints using custom C++ control logic and an sw604 switch while debugging hardware timing, servo behavior, and power stability.',
    limitation:
      'The SIM900A GSM subsystem was integrated and tested, but full deployment was limited by modern carrier availability because 2G support has largely been phased out.',
    technologies: ['Arduino', 'C++', 'RFID', 'SIM900A GSM', 'Servo Control', 'Motion Sensors'],
    repository: repositories.rfid,
    gallery: [
      { type: 'photo', title: 'RFID wiring photo coming soon', caption: 'Bench wiring and access-control hardware evidence slot.' },
      { type: 'diagram', title: 'Architecture diagram pending upload', caption: 'Local authentication path, actuation flow, and GSM subsystem boundary.' },
      { type: 'log', title: 'GSM serial test log coming soon', caption: 'SIM900A integration evidence and carrier constraint notes.' },
    ],
    highlights: [
      'RFID-based authentication flow',
      'Motion detection integrated into access logic',
      'Servo-controlled physical access prototype',
      'SIM900A GSM module integrated and tested with 2G deployment constraints documented',
    ],
    details: {
      Problem:
        'Physical access-control systems need reliable local authentication and actuation even when notification or telemetry networks are unreliable. The prototype had to handle RFID reads, motion input, and gate motor behavior without depending on cloud infrastructure.',
      Solution:
        'Built an Arduino-controlled access prototype using RFID authentication, sensor input, servo actuation, and firmware-level decision logic. The access flow prioritizes local control while separating optional GSM telemetry from core unlocking behavior.',
      Architecture:
        'RFID and motion inputs feed an Arduino control loop. Custom C++ logic evaluates access state, drives servo/gate behavior through the sw604 switch constraint, and communicates with the SIM900A GSM module as a separate telemetry subsystem.',
      Challenges:
        'Key constraints included servo control stability, hardware debugging across multiple modules, power delivery reliability, and SIM900A deployment limitations caused by 2G network phase-out on modern carriers.',
      'Lessons Learned':
        'The project reinforced the importance of designing embedded systems around real hardware constraints, documenting deployment limits honestly, and keeping safety-critical local behavior independent from unreliable network features.',
    },
  },
];

export const skillGroups = [
  { title: 'Languages', skills: ['Python', 'Java', 'C++', 'SQL'] },
  { title: 'Machine Learning', skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'] },
  { title: 'Embedded Systems', skills: ['Arduino', 'RFID', 'GSM', 'Sensors'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'Linux', 'VS Code'] },
];

export const currentlyBuilding = [
  {
    title: 'Neural Prompt Orchestrator',
    status: 'Architecture & Planning Phase',
    role: 'AI & Deterministic Systems Lead',
    team: '4 Engineers',
    stack: ['React', 'FastAPI', 'Prompt Engineering', 'Multi-Agent Systems'],
    description:
      'Designing a prompt orchestration platform focused on coordinating deterministic workflows and AI-assisted reasoning systems. Currently in architecture planning, system design, and SDLC definition.',
  },
];

export const archiveItems = [
  {
    name: 'E-Learning Management System',
    description: 'Lightweight object-oriented Java project exploring education workflows and application structure.',
    repository: repositories.elearning,
  },
  {
    name: 'Electricity Billing Management System',
    description: 'Java-based utility billing application covering billing workflows and management-system structure.',
    repository: repositories.electricityBilling,
  },
];
