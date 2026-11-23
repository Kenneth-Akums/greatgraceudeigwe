import portraitImg from '../assets/greatgrace-portrait.jpg';
import project1Img from '../assets/project-1-sheets.png';
import project2Img from '../assets/project-2-travel.png';
import project3Img from '../assets/project-3-sops.png';
import project4Img from '../assets/project-4-clickup.png';
import project5Img from '../assets/project-5-calendar.png';
import logoVerionX from '../assets/logo-verionx.png';
import logoMavenAide from '../assets/logo-mavenaide.png';
import logoLoveworld from '../assets/logo-loveworld.png';

import toolGoogleWorkspace from '../assets/tools/google-workspace.png';
import toolClickUp from '../assets/tools/clickup.png';
import toolNotion from '../assets/tools/notion.png';
import toolAirtable from '../assets/tools/airtable.png';
import toolSlack from '../assets/tools/slack.png';
import toolApollo from '../assets/tools/apollo.png';
import toolGoHighLevel from '../assets/tools/gohighlevel.png';
import toolCanva from '../assets/tools/canva.png';
import toolChatGPT from '../assets/tools/chatgpt.png';

import toolZoom from '../assets/tools/zoom.png';
import toolTeams from '../assets/tools/teams.png';
import toolTrello from '../assets/tools/trello.png';
import toolShopify from '../assets/tools/shopify.png';
import toolMeta from '../assets/tools/meta.png';
import toolCapCut from '../assets/tools/capcut.png';
import toolLinkedIn from '../assets/tools/linkedin.png';
import toolClaude from '../assets/tools/claude.png';
import toolInstagram from '../assets/tools/instagram.png';
import toolYouTube from '../assets/tools/youtube.png';
import toolTikTok from '../assets/tools/tiktok.png';

import clientElijah from '../assets/clients/client-elijah.png';
import clientAda from '../assets/clients/client-ada.png';
import clientChidinma from '../assets/clients/client-chidinma.png';

export const PROFILE = {
  name: 'Greatgrace Udeigwe',
  role: 'Executive Operations Partner',
  email: 'greatgraceudeigwe@gmail.com',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
  availability: 'Available for Select Engagements',
  portrait: portraitImg,
};

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'tools', label: 'Tools' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'testimonials', label: 'Testimonials' },
];

export const METRICS = [
  { value: 99.8, suffix: '%', label: 'On-Time Execution', decimals: 1 },
  { value: 15, suffix: '+ hrs', label: 'Saved Weekly / Leader', decimals: 0 },
  { value: 0, suffix: '%', label: 'Micro-Management', decimals: 0 },
];

export const MILESTONES = [
  {
    initials: 'VX',
    logo: logoVerionX,
    role: 'Executive Assistant',
    company: 'VerionX',
    tag: 'Core Lead',
  },
  {
    initials: 'MA',
    logo: logoMavenAide,
    role: 'Executive Assistant',
    company: 'MavenAide LLC',
    tag: 'Top Graduate',
  },
  {
    initials: 'LW',
    logo: logoLoveworld,
    role: 'Administrative Assistant',
    company: 'Loveworld Inc.',
    tag: 'Systems Setup',
  },
];

export interface ServicePillar {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  icon: 'schedule' | 'handshake' | 'architecture';
  tone: 'dark' | 'warm' | 'light';
  points: string[];
  deliverableBadge: string;
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'executive-support',
    number: '01',
    tag: 'Time Defense',
    title: 'High-Level Executive Support',
    subtitle: 'Protect executive focus so every hour compounds on high-leverage leadership.',
    icon: 'schedule',
    tone: 'light',
    deliverableBadge: 'Calendar • Inbox • Briefings',
    points: [
      'Strategically manage and protect your calendar so your time goes to what actually matters.',
      'Handle your inbox—filtering, flagging, and drafting responses so nothing gets missed.',
      'Coordinate meetings, record sessions, schedule appointments, and send follow-ups on your behalf.',
      'Prepare executive briefs, documents, and reports so you walk into every room ready.',
    ],
  },
  {
    id: 'client-project',
    number: '02',
    tag: 'Project Rhythm',
    title: 'Client & Project Coordination',
    subtitle: 'Keep teams aligned, clients delighted, and deliverables landing on schedule.',
    icon: 'handshake',
    tone: 'warm',
    deliverableBadge: 'Sprints • Alignment • Retention',
    points: [
      'Lead projects from kickoff to completion with clear timelines, accountability, and on-time delivery.',
      'Facilitate team alignment and cross-functional communication to keep priorities on track.',
      'Manage client relationships and follow-up sequences so nothing falls through the cracks.',
      'Build the operational rhythm that lets you scale without recurring chaos.',
    ],
  },
  {
    id: 'operations-systems',
    number: '03',
    tag: 'Architecture',
    title: 'Operations & Systems',
    subtitle: 'Turn tribal knowledge into repeatable SOPs, dashboards, and scalable workflows.',
    icon: 'architecture',
    tone: 'dark',
    deliverableBadge: 'SOPs • Onboarding • KPIs',
    points: [
      'Design and implement SOPs that systemize your business and drive operational consistency.',
      'Build and manage workflow systems that translate company goals into clear executable processes.',
      'Develop client and team onboarding frameworks that deliver a seamless, professional experience.',
      'Create operational dashboards to track KPIs and support data-driven decisions.',
    ],
  },
];

export const COMPETENCIES = [
  'Executive Calendar & Inbox Management',
  'Project & Operations Management',
  'LinkedIn Marketing & Outreach',
  'SOP Creation & Process Documentation',
  'Systems Setup & Workflow Automation',
  'Client Communication & Follow-Up',
  'Research & Executive Reporting',
];

export const TOOLS = [
  {
    name: 'Google Workspace',
    category: 'Gmail, Drive, Docs, Sheets',
    logo: toolGoogleWorkspace,
    wideLogo: true,
  },
  { name: 'ClickUp', category: 'Pipelines & Sprints', logo: toolClickUp },
  { name: 'Notion', category: 'Company Wikis & SOPs', logo: toolNotion },
  { name: 'Airtable', category: 'Relational Databases', logo: toolAirtable },
  { name: 'Slack', category: 'Executive Comms', logo: toolSlack },
  { name: 'Apollo.io', category: 'Prospect Outreach', logo: toolApollo },
  { name: 'GoHighLevel', category: 'CRM & Automations', logo: toolGoHighLevel },
  { name: 'Canva Pro', category: 'Decks & Visual Assets', logo: toolCanva },
  { name: 'ChatGPT & AI', category: 'Synthesis & Workflows', logo: toolChatGPT },
];

export const EXTRA_TOOLS = [
  { name: 'Zoom', logo: toolZoom },
  { name: 'Microsoft Teams', logo: toolTeams },
  { name: 'Trello', logo: toolTrello },
  { name: 'Shopify Connect', logo: toolShopify },
  { name: 'Meta Suite', logo: toolMeta },
  { name: 'Claude AI', logo: toolClaude },
  { name: 'CapCut', logo: toolCapCut },
  { name: 'LinkedIn', logo: toolLinkedIn },
  { name: 'Instagram', logo: toolInstagram },
  { name: 'YouTube', logo: toolYouTube },
  { name: 'TikTok', logo: toolTikTok },
];

export interface CaseStudy {
  id: string;
  number: string;
  client: string;
  tool: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  metrics: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'budget-systems',
    number: '01',
    client: 'Martinez Financial Group Strategies LLC',
    tool: 'Google Sheets',
    title: 'Financial Planning & Budget Systems',
    problem:
      'No structured system to track monthly budget, spending leakages, and revenue trajectory in one place.',
    solution:
      'Designed a clean, executive budget template with Income, Transactions, and Dashboard tabs to monitor monthly cashflow continuously.',
    result:
      'Eliminated guesswork around monthly spending, centralized team budget reporting, and enabled faster data-backed leadership decisions.',
    ctaLabel: 'Inspect Google Sheets System',
    image: project1Img,
    imageAlt: 'Google Sheets budget dashboard built for Martinez Financial Group Strategies LLC',
    metrics: ['100% Cashflow Visibility', '3-Step Executive Workflow'],
  },
  {
    id: 'travel-logistics',
    number: '02',
    client: 'C-Suite Logistics',
    tool: 'Google Slides',
    title: 'Executive Travel Coordination & Logistics',
    problem:
      'High-stakes multi-day international trip to Cape Town across multiple time zones with zero margin for flight delays or scheduling gaps.',
    solution:
      'Built an end-to-end executive travel pack covering flights, hotel bookings, VIP ground transfers, and day-by-day meeting itineraries.',
    result:
      'Delivered a polished, ready-to-use travel pack with zero logistics oversights and complete peace of mind from departure to return.',
    ctaLabel: 'Inspect Cape Town Travel Pack',
    image: project2Img,
    imageAlt: 'Executive travel pack presentation deck for Cape Town trip',
    metrics: ['Zero Logistics Gaps', 'End-to-End Concierge'],
  },
  {
    id: 'sop-architecture',
    number: '03',
    client: 'MFG Operations',
    tool: 'Google Drive & Docs',
    title: 'SOP Creation & Folder Management Architecture',
    problem:
      'Unorganized files and ad-hoc processes causing repeated onboarding bottlenecks and operational confusion across departments.',
    solution:
      'Authored a full SOP suite—Client Onboarding, Worker Onboarding, Internal Accounting, and Executive Financial Strategy—housed in a clean Drive taxonomy.',
    result:
      'Established a single source of truth so nothing depended on memory, cutting contractor ramp-up friction dramatically.',
    ctaLabel: 'Inspect SOP Drive Architecture',
    image: project3Img,
    imageAlt: 'Structured Google Drive SOP folder hierarchy for MFG Operations',
    metrics: ['Single Source of Truth', '60% Faster Onboarding'],
  },
  {
    id: 'clickup-ops',
    number: '04',
    client: 'MFG Financial Consulting',
    tool: 'ClickUp Ecosystem',
    title: 'Project Management Systems in ClickUp',
    problem:
      'Client deliverables, outreach, and admin tasks scattered across chat messages with no centralized visibility or priority tracking.',
    solution:
      'Built and managed a unified ClickUp board with To-Do, In-Progress, and Complete stages, priority tags, owners, and deadlines.',
    result:
      'Transformed a scattered workflow into clear daily accountability so leadership focused on growth instead of chasing updates.',
    ctaLabel: 'Inspect ClickUp Workspace',
    image: project4Img,
    imageAlt: 'ClickUp operations board managing client tasks and outreach for MFG',
    metrics: ['Zero Missed Follow-Ups', 'Full Sprint Visibility'],
  },
  {
    id: 'calendar-inbox',
    number: '05',
    client: 'Executive Office',
    tool: 'Google Calendar & Gmail',
    title: 'Calendar & Inbox Management',
    problem:
      'Overloaded executive inbox burying urgent messages alongside overlapping calendar appointments causing constant scheduling conflicts.',
    solution:
      'Implemented inbox triage rules, priority labeling, drafted responses, calendar conflict audits, and color-coded deep-focus time blocking.',
    result:
      'Maintained Inbox Zero daily, eliminated scheduling conflicts, and reclaimed 12+ hours of uninterrupted leadership focus every week.',
    ctaLabel: 'Inspect Calendar & Triage System',
    image: project5Img,
    imageAlt: 'Color-coded time-blocked Google Calendar and organized executive inbox',
    metrics: ['Inbox Zero Daily', '12+ hrs/wk Reclaimed'],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Elijah Moses-Iyajini',
    initials: 'EM',
    avatar: clientElijah,
    role: 'Founder & Collaborator',
    quote:
      'Working with Greatgrace has been a fantastic experience. She delivers massive results with precision. She would be a tremendous asset to any organization looking for a forward-thinking and effective collaborator.',
  },
  {
    name: 'Ada Patience',
    initials: 'AP',
    avatar: clientAda,
    role: 'Business Owner',
    quote:
      "Greatgrace was a solid support to my business; organised, proactive, and reliable. She didn't wait for instructions—she took initiative. Beyond EA work, she handled lead generation with consistency and precision. I could trust her with important tasks without constant supervision.",
  },
  {
    name: 'Ogbonnanya Chidinma',
    initials: 'OC',
    avatar: clientChidinma,
    role: 'MavenAide Leadership',
    quote:
      "Greatgrace is one of MavenAide Academy's top graduates. She stood out for her discipline, attention to detail, and strong work ethic. Proactive, highly organised, and committed to quality, I confidently recommend her to any team looking for a dependable, skilled Virtual Assistant.",
  },
];
