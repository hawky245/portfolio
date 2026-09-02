export const profile = {
  name: 'Abhay Surya R',
  role: 'AI & ML Engineering Student',
  summary: 'Building software systems, machine learning applications, intelligent automation tools, and engineering projects.',
  education: '3rd-year AI & ML Engineering Student at Sapthagiri NPS University',
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
  note: 'A finalized PDF resume will be available soon. Drop the PDF at public/resume/Abhay-Surya-R-Resume.pdf to enable direct download.',
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
  'AI & ML Engineering',
  'Prompt & Workflow Design',
  'Embedded Systems & C++',
  'Applied Engineering Delivery',
];

// Ordered to lead with AI & ML systems, then embedded hardware proof.
export const projects = [
  {
    id: 'career-guidance-ai',
    title: 'CareerPath AI',
    status: 'Prototype / In Development',
    category: 'AI / Web Application',
    priority: 'primary',
    summary:
      'Career guidance workflow that structures user inputs into milestone-driven roadmaps. React frontend with deterministic fallback logic and a clean API boundary for future model integration.',
    proof:
      'Implemented the user workflow, component architecture, and API integration boundary.',
    limitation:
      'Engineering focus: deterministic workflow, component-driven architecture, and extensible API boundary.',
    technologies: ['React', 'Prompt Engineering', 'System Design', 'API Design'],
    repository: repositories.careerAi,
    highlights: [
      'Structured inputs → milestone workflow',
      'Component-driven React architecture',
      'Extensible API integration boundary',
      'Deterministic fallback logic',
    ],
    details: {
      Problem:
        'Students and early-career engineers need clear roadmaps that translate their background into concrete next steps.',
      Solution:
        'Built an interactive workflow that structures inputs, evaluates profiles, and outputs step-by-step milestones.',
      Architecture:
        'Component-driven React frontend with modular state and explicit API interfaces for downstream model services.',
      Challenges:
        'Keeping the workflow useful before AI integration by designing deterministic fallback logic.',
      'Lessons Learned':
        'Clean API boundaries enable rapid UX iteration without overstating capabilities.',
    },
  },
  {
    id: 'aqi-predictor',
    title: 'AQI Prediction System',
    status: 'Built / Validation in Progress',
    category: 'Machine Learning',
    priority: 'standard',
    summary:
      'End-to-end ML pipeline that trains a linear regression baseline on historical Indian air-quality data and serves forecasts through a Streamlit dashboard.',
    proof:
      'Built data cleaning, feature preprocessing, Scikit-learn training, and an interactive Streamlit frontend.',
    limitation:
      'Engineering focus: reproducible preprocessing pipeline and interactive model exploration.',
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Linear Regression'],
    repository: repositories.aqi,
    metrics: [
      { label: 'Model', value: 'Linear Regression' },
      { label: 'Dataset', value: '15-year historical AQI' },
      { label: 'Framework', value: 'Scikit-learn' },
      { label: 'Interface', value: 'Streamlit' },
    ],
    highlights: [
      '15-year Indian air-quality dataset',
      'Reproducible preprocessing workflow',
      'Linear regression baseline',
      'Streamlit forecast dashboard',
    ],
    details: {
      Problem:
        'Air-quality data is noisy and seasonal; this project tests whether a lightweight regression baseline can produce interpretable forecasts.',
      Solution:
        'Created a Python workflow that ingests historical records, preprocesses features, trains a linear model, and visualizes results in Streamlit.',
      Architecture:
        'Pandas ingestion → preprocessing → train/test split → Scikit-learn regression → Streamlit visualization.',
      Challenges:
        'Handling missing values, leakage-safe splitting, and feature consistency across years.',
      'Lessons Learned':
        'Reliable ML communication depends on transparent dataset context and verified validation metrics.',
    },
  },
  {
    id: 'rfid-smart-security',
    title: 'RFID Smart Security System',
    status: 'Built / Bench-tested',
    category: 'Embedded Systems',
    priority: 'standard',
    summary:
      'Arduino access-control prototype with RFID authentication, motion detection, servo actuation, and SIM900A telemetry integration.',
    proof:
      'Built custom C++ control logic for bidirectional gate actuation and validated SIM900A serial communication on the bench.',
    limitation:
      'Core unlocking runs locally; GSM telemetry tested as an auxiliary subsystem separate from safety-critical access logic.',
    technologies: ['Arduino', 'C++', 'RFID', 'GSM (SIM900A)', 'Servo Control', 'Motion Sensors'],
    repository: repositories.rfid,
    highlights: [
      'RFID authentication flow',
      'Motion-triggered access logic',
      'Servo-driven physical gate',
      'Local-first safety design',
    ],
    details: {
      Problem:
        'Physical access control needs reliable local authentication that works even when telemetry networks are unavailable.',
      Solution:
        'Implemented an Arduino prototype with RFID authentication, sensor input, servo actuation, and firmware-level decision logic.',
      Architecture:
        'RFID and motion inputs feed an Arduino control loop that evaluates access state and drives servo behavior.',
      Challenges:
        'Stabilizing servo control, bidirectional gate timing, hardware debugging, and power delivery reliability.',
      'Lessons Learned':
        'Keep telemetry features decoupled from safety-critical unlocking and document hardware constraints early.',
    },
  },
];

export const skillGroups = [
  { title: 'Languages', skills: ['Python', 'Java', 'C++', 'SQL', 'JavaScript'] },
  { title: 'Machine Learning', skills: ['scikit-learn', 'Pandas', 'Matplotlib', 'Linear Regression', 'Data Analysis'] },
  { title: 'Frameworks & Tools', skills: ['React', 'Streamlit', 'Git', 'Linux'] },
  { title: 'Embedded & Hardware', skills: ['Arduino', 'RFID', 'GSM', 'Sensors'] },
];

export const currentlyBuilding = [
  {
    title: 'Neural Prompt Orchestrator',
    status: 'Architecture & Planning Phase',
    role: 'AI & Deterministic Systems Lead',
    team: '4 Engineers',
    stack: ['React', 'FastAPI', 'Prompt Engineering', 'Multi-Agent Systems'],
    description:
      'Designing a prompt orchestration platform that coordinates deterministic workflows with AI-assisted reasoning. Currently defining architecture, system design, and SDLC.',
  },
];

export const archiveItems = [
  {
    name: 'E-Learning Management System',
    description: 'Object-oriented Java project modeling course workflows and modular learning management.',
    repository: repositories.elearning,
  },
  {
    name: 'Electricity Billing Management System',
    description: 'Java-based electricity billing management covering billing workflows and utility data handling.',
    repository: repositories.electricityBilling,
  },
];
