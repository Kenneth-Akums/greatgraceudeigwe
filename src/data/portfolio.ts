import portraitImg from '../assets/greatgrace-portrait.jpg';
import officePortraitImg from '../assets/greatgrace-office.jpg';
import project1Img from '../assets/project-1-budget.png';
import project2Img from '../assets/project-2-singapore.jpg';
import project3Img from '../assets/project-3-sops.png';
import project4Img from '../assets/project-4-clickup-dark.jpg';
import project5Img from '../assets/project-5-inbox.jpg';
import project6Img from '../assets/project-6-meetings.jpg';
import project7Img from '../assets/project-7-shopify.jpg';
import project8Img from '../assets/project-8-airtable.png';
import project9Img from '../assets/project-9-booking.jpg';
import project10Img from '../assets/project-10-trello.jpg';
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
  officePortrait: officePortraitImg,
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

export const EDUCATION = [
  {
    degree: 'B.A. International Management',
    institution: 'IU International University of Applied Sciences, Berlin',
    period: '2024 – 2026',
    focus: 'Streamlining executive workflows, international operations, and cross-functional communication.',
  },
  {
    degree: 'B.Sc. Human Nutrition & Dietetics',
    institution: 'Michael Okpara University of Agriculture, Umudike',
    period: '2017 – 2022',
    focus: 'Built strong analytical rigor, confidentiality discipline, and structured multi-task execution.',
  },
];

export const CERTIFICATIONS = [
  { title: 'Virtual Assistant Certification', issuer: 'ALX Africa' },
  { title: 'IELTS Academic (Band 7)', issuer: 'IDP Education' },
  { title: 'Google Digital Marketing & E-commerce', issuer: 'Coursera' },
  { title: 'Data Analytics & Visualization', issuer: '3MTT NITDA' },
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

export interface ExtraTool {
  name: string;
  logo?: string;
}

export const EXTRA_TOOLS: ExtraTool[] = [
  { name: 'Zoom', logo: toolZoom },
  { name: 'Microsoft Teams', logo: toolTeams },
  { name: 'Trello', logo: toolTrello },
  { name: 'Calendly' },
  { name: 'Zoho Bookings' },
  { name: 'Shopify Connect', logo: toolShopify },
  { name: 'Brevo' },
  { name: 'Mailmeteor' },
  { name: 'GMass' },
  { name: 'Mergo' },
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
  externalUrl?: string;
  externalLabel?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'budget-systems',
    number: '01',
    client: 'Executive Operations & Events',
    tool: 'Google Sheets',
    title: 'Financial Planning, Vendor & Budget Systems',
    problem:
      'No centralized structure to track event vendor quotes, monthly budgets, spending leakages, and confirmation statuses in one place.',
    solution:
      'Built clean executive Google Sheets trackers combining vendor contacts, live cost estimates, status tags, and automated cost comparison charts.',
    result:
      'Eliminated guesswork around spending, centralized budget reporting, and enabled faster, data-backed leadership decisions.',
    ctaLabel: 'Inspect Budget & Vendor System',
    image: project1Img,
    imageAlt: 'Google Sheets vendor and budget tracker with live cost comparison chart',
    metrics: ['100% Budget Visibility', 'Automated Cost Charts'],
  },
  {
    id: 'travel-logistics',
    number: '02',
    client: 'C-Suite Global Logistics',
    tool: 'Google Slides',
    title: 'Executive Travel Coordination & Logistics',
    problem:
      'High-stakes international executive trips (Singapore & Cape Town) across multiple time zones with zero margin for flight delays or scheduling gaps.',
    solution:
      'Designed end-to-end 7-day executive travel packs covering flights, hotel bookings, VIP ground transfers, and day-by-day meeting itineraries.',
    result:
      'Delivered polished, boardroom-ready travel decks with zero logistics oversights and complete peace of mind from departure to return.',
    ctaLabel: 'Inspect Executive Travel Pack',
    image: project2Img,
    imageAlt: '7-Day Executive Travel Plan presentation deck for Singapore Market Expansion',
    metrics: ['Zero Logistics Gaps', 'End-to-End Concierge'],
    externalUrl:
      'https://docs.google.com/presentation/d/1GRDPSPOJTYHB18--CPIDRQEKNOSO27MN4XG9JFM2D7S/edit?usp=sharing',
    externalLabel: 'Open Live Google Slides Deck',
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
    client: 'Product & Consulting Operations',
    tool: 'ClickUp & Airtable',
    title: 'Project Management Systems in ClickUp',
    problem:
      'Client deliverables, launch milestones, and cross-functional sprints scattered across messages with no centralized priority visibility.',
    solution:
      'Architected a unified ClickUp Kanban & Airtable launch workspace with Not Started, In Progress, Testing/QA, and Launch Complete stages plus priority flags.',
    result:
      'Transformed scattered tasks into clear daily accountability so leadership focused on growth instead of chasing updates.',
    ctaLabel: 'Inspect ClickUp Workspace',
    image: project4Img,
    imageAlt: 'Dark-mode ClickUp Kanban operations board managing launch milestones',
    metrics: ['Zero Missed Follow-Ups', 'Full Sprint Visibility'],
  },
  {
    id: 'calendar-inbox',
    number: '05',
    client: 'Executive Office',
    tool: 'Gmail & Google Calendar',
    title: 'Calendar Defense & Inbox Triage',
    problem:
      'Overloaded executive inbox burying urgent messages alongside overlapping calendar appointments causing constant scheduling conflicts.',
    solution:
      'Implemented color-coded Gmail priority labels (URGENT, DEADLINE, REPLY, CONFIRM RECEIPT, MEETINGS), automated filters, and deep-focus calendar time blocking.',
    result:
      'Eliminated inbox overwhelm, prevented scheduling conflicts, and reclaimed 12–15+ hours of uninterrupted leadership focus every week.',
    ctaLabel: 'Inspect Inbox Triage System',
    image: project5Img,
    imageAlt: 'Color-coded Gmail inbox prioritized with Urgent, Deadline, Reply, and Confirm Receipt labels',
    metrics: ['Inbox Zero Daily', '15+ hrs/wk Reclaimed'],
  },
  {
    id: 'meeting-governance',
    number: '06',
    client: 'GAO TEK RFID & Leadership Teams',
    tool: 'Google Docs & Calendly',
    title: 'Executive Meeting Governance & Minutes',
    problem:
      'Weekly leadership syncs lacked structured agendas and documented ownership, causing key action items to slip between meetings.',
    solution:
      'Standardized structured weekly sync agendas, facilitated meetings, and delivered crisp Meeting Minutes with owners and strict due dates.',
    result:
      'Achieved 100% agenda coverage, crystal-clear team accountability, and effortless follow-through across remote stakeholders.',
    ctaLabel: 'Inspect Meeting Minutes System',
    image: project6Img,
    imageAlt: 'Structured executive Meeting Minutes document with summary and assigned action points',
    metrics: ['100% Agenda Coverage', 'Owner-Tracked Actions'],
  },
  {
    id: 'shopify-storefront',
    number: '07',
    client: 'E-Commerce Operations',
    tool: 'Shopify',
    title: 'Shopify Store Setup & Product Merchandising',
    problem:
      'Product catalog lacked structured SKU tracking, pricing hierarchy, variant organization, and conversion-focused product copy.',
    solution:
      'Configured a full Shopify storefront with SKU & inventory tracking, psychological pricing (MSRP vs. Sale), SEO-optimized descriptions, and Shopify Metafields & Variants.',
    result:
      'Launched a clean, conversion-ready product experience with seamless variant selection and organized backend inventory management.',
    ctaLabel: 'Inspect Shopify Storefront',
    image: project7Img,
    imageAlt: 'Shopify product storefront featuring Aura Smart Posture Corrector with variants and pricing',
    metrics: ['SKU & Variant Architecture', 'SEO-Optimized Catalog'],
  },
  {
    id: 'airtable-launch',
    number: '08',
    client: 'Digital Health Launch Ops',
    tool: 'Airtable',
    title: 'Product Launch Tracker in Airtable',
    problem:
      'Multi-phase app launch tasks across design, beta testing, and marketing lacked a structured relational database with clear ownership and deadlines.',
    solution:
      'Built a relational Airtable Launch Plan covering Market Analysis, UI/UX Design, Beta Testing, Marketing Assets, and Final Launch Review with color-coded status tags.',
    result:
      'Gave stakeholders a live, filterable single view of every launch milestone, owner, and due date.',
    ctaLabel: 'Inspect Airtable Database',
    image: project8Img,
    imageAlt: 'Airtable Launch Plan grid tracking Remote Health Monitoring App milestones',
    metrics: ['Relational Launch Grid', 'Color-Coded Status Views'],
  },
  {
    id: 'appointment-booking',
    number: '09',
    client: 'Client Scheduling & Intake',
    tool: 'Calendly & Zoho Bookings',
    title: 'Automated Appointment Booking & Intake',
    problem:
      'Manual back-and-forth emails to schedule discovery calls and client consultations across time zones were wasting hours every week.',
    solution:
      'Configured automated Calendly, Google Calendar, and Zoho Bookings scheduling flows with time-zone detection, Zoom/Google Meet routing, and pre-call intake questions.',
    result:
      'Eliminated scheduling friction completely and ensured every discovery call starts with full client context.',
    ctaLabel: 'Inspect Booking Workflow',
    image: project9Img,
    imageAlt: 'Calendly discovery call booking interface configured with automated availability and intake',
    metrics: ['Zero Back-and-Forth', 'Auto Time-Zone Sync'],
    externalUrl:
      'https://drive.google.com/drive/folders/1_WW6QVJLFLTQJDPKRACLE6HDHA8KWZYK?usp=sharing',
    externalLabel: 'Open Scheduling Portfolio Folder',
  },
  {
    id: 'trello-workflow',
    number: '10',
    client: 'Agile Task Coordination',
    tool: 'Trello',
    title: 'Visual Kanban & Sprint Board in Trello',
    problem:
      'Weekly priorities and recurring administrative tasks lacked a lightweight visual board to separate immediate Today actions from upcoming weekly deliverables.',
    solution:
      'Structured a Trello Kanban workspace with Inbox triage, Today, This Week, and Later columns plus card checklists and planner views.',
    result:
      'Kept daily execution calm, visual, and immediately scannable for both executive and support teams.',
    ctaLabel: 'Inspect Trello Board',
    image: project10Img,
    imageAlt: 'Trello visual Kanban board organizing Inbox, Today, This Week, and Later tasks',
    metrics: ['Visual Kanban Flow', 'Daily Priority Clarity'],
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
