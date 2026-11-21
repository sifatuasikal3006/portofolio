export type ProjectCategory = 'All' | 'Photo Retouching' | 'Brand Identity' | 'Editorial & UI/UX';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: string;
  client: string;
  role: string;
  tools: string[];
  summary: string;
  challenge: string;
  outcome: string;
  deliverables: string[];
  palette: { name: string; hex: string }[];
  retouchMetrics: {
    exposure: string;
    contrast: string;
    colorProfile: string;
  };
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  active?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
  iconKey: 'search' | 'lightbulb' | 'pen' | 'code' | 'send';
}

export const PROFILE = {
  roleBarLeft: 'PHOTO EDITOR',
  roleBarRight: 'VISUAL DESIGNER & INFORMATICS STUDENT',
  availabilityLabel: 'AVAILABLE FOR FREELANCE',
  greeting: "Hello, I'm",
  firstName: 'SIFA',
  lastName: 'TUASIKAL',
  roleTitle: 'PHOTO EDITOR & UI/UX VISUAL DESIGNER',
  bio: "Hi, Buddy Ceen here! I'm an Informatics Engineering student at Institut Teknologi PLN with a strong interest in photo editing and visual design, focused on creating clean and engaging visuals.",
  locationShort: 'CENGKARENG, INDONESIA',
  locationFull: 'Cengkareng, Jakarta, Indonesia',
  locationFooter: 'CENGKARENG, JAKARTA — INDONESIA',
  calloutText: 'Turning raw vision into powerful, refined visual experiences.',
  portraitUrl:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
  email: 'sifatuasikal30@gmail.com',
  linkedinLabel: 'linkedin.com/in/sifa-tuasikal',
  linkedinUrl: 'https://linkedin.com/in/sifa-tuasikal-07762b433',
  instagramLabel: '@sifatuasikal',
  instagramUrl: 'https://instagram.com/sifatuasikal',
  quote:
    'Great visual design is not just how it looks, but how it evokes feeling, structure, and seamless clarity.',
  signature: 'Sifa Tuasikal',
};

export const HERO_METRICS = [
  {
    value: '2026',
    title: 'ITPLN INFORMATICS',
    subtitle: 'STUDENT & CREATOR',
  },
  {
    value: '40+',
    title: 'PROJECTS COMPLETED',
    subtitle: 'EDITS & MOCKUPS',
  },
  {
    value: '100%',
    title: 'PASSION FOR VISUALS',
    subtitle: 'SATISFACTION GUARANTEED',
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'B.Sc. in Informatics Engineering',
    institution: 'Institut Teknologi PLN',
    period: '2026 — NOW',
    active: true,
  },
  {
    degree: 'Visual Design & Retouching',
    institution: 'Independent Creative Specialization',
    period: '2024',
    active: false,
  },
];

export const SKILLS_AND_TOOLS: string[] = [
  'PHOTO EDITING',
  'COLOR GRADING',
  'UI/UX DESIGN',
  'FIGMA',
  'LIGHTROOM',
  'PHOTOSHOP',
  'CANVA PRO',
  'HTML / CSS',
  'TYPOGRAPHY',
  'RETOUCHING',
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understanding goals, audience tone, and project visual requirements.',
    detail: 'Mood analysis, reference auditing, and technical asset inspection before touching a pixel.',
    iconKey: 'search',
  },
  {
    number: '02',
    title: 'IDEATE',
    description: 'Planning, moodboarding, color palettes, and creating the right visual concept.',
    detail: 'Building tonal direction, grid systems, and editorial typography pairings aligned to brand voice.',
    iconKey: 'lightbulb',
  },
  {
    number: '03',
    title: 'DESIGN & RETOUCH',
    description: 'Crafting sharp visual edits with focus on emotion, clarity, and balanced layout.',
    detail: 'Frequency separation, dodge-and-burn sculpting, UI component assembly, and layout composition.',
    iconKey: 'pen',
  },
  {
    number: '04',
    title: 'REFINE',
    description: 'Fine-tuning micro-contrast, color depth, responsive UI, and visual hierarchy.',
    detail: 'Calibrated contrast passes across calibrated displays and responsive viewport checks.',
    iconKey: 'code',
  },
  {
    number: '05',
    title: 'DELIVER',
    description: 'High-resolution assets, production files, and smooth handoff with perfection.',
    detail: 'Print-ready CMYK/RGB exports, Figma component libraries, and clean developer handoff.',
    iconKey: 'send',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'veloce-bikes',
    number: '01',
    title: 'VELOCE BIKES',
    subtitle: 'E-COMMERCE & RETOUCHING',
    category: 'Photo Retouching',
    year: '2026',
    client: 'Veloce Performance Cycles',
    role: 'Lead Photo Retoucher & Digital Art Director',
    tools: ['PHOTO EDITING', 'COLOR GRADING', 'LIGHTROOM', 'PHOTOSHOP', 'RETOUCHING'],
    summary:
      'High-contrast product retouching and dark-mode e-commerce showcase for Veloce flagship carbon road bicycles.',
    challenge:
      'Raw studio shots contained harsh specular highlights on matte carbon frames and inconsistent rim reflections.',
    outcome:
      'Executed multi-layer reflection cleanup, deep matte contrast grading, and crimson accent keying for a cohesive campaign launch.',
    deliverables: [
      '24 Retouched Hero Product Angles',
      'Custom Lightroom Crimson LUT',
      'Dark-Mode Lookbook Layout',
    ],
    palette: [
      { name: 'Carbon Void', hex: '#0A0A0A' },
      { name: 'Graphite Frame', hex: '#1C1C1C' },
      { name: 'Veloce Crimson', hex: '#D92323' },
      { name: 'Alloy Silver', hex: '#A3A3A3' },
    ],
    retouchMetrics: {
      exposure: '+0.45 EV',
      contrast: '+32 S-Curve',
      colorProfile: 'Adobe RGB · Deep Matte',
    },
    featured: true,
  },
  {
    id: 'woodcraft',
    number: '02',
    title: 'WOODCRAFT',
    subtitle: 'FURNITURE BRAND IDENTITY',
    category: 'Brand Identity',
    year: '2025',
    client: 'Woodcraft Artisanal Studio',
    role: 'Brand & Visual Identity Designer',
    tools: ['UI/UX DESIGN', 'FIGMA', 'PHOTOSHOP', 'TYPOGRAPHY', 'CANVA PRO'],
    summary:
      'Warm minimalist furniture brand identity pairing tactile editorial serif typography with clean architectural studio presentation.',
    challenge:
      'Reposition a traditional teak workshop into an elevated contemporary design house appealing to urban architects.',
    outcome:
      'Created a warm stone-paper visual language, grain-accurate product retouching, and a calm lookbook system.',
    deliverables: [
      'Visual Identity & Typography System',
      'Collection 04 Lookbook Cards',
      'Color-Calibrated Wood Finish Presets',
    ],
    palette: [
      { name: 'Travertine Cream', hex: '#E8E4DC' },
      { name: 'Artisanal Teak', hex: '#B38656' },
      { name: 'Espresso Ink', hex: '#1C1917' },
      { name: 'Seal Crimson', hex: '#D92323' },
    ],
    retouchMetrics: {
      exposure: '+0.20 EV',
      contrast: '+14 Warm Film',
      colorProfile: 'sRGB · Natural Grain',
    },
    featured: true,
  },
  {
    id: 'urbanic',
    number: '03',
    title: 'URBANIC',
    subtitle: 'FASHION MAGAZINE CONCEPT',
    category: 'Editorial & UI/UX',
    year: '2026',
    client: 'Urbanic Issue 12 Editorial',
    role: 'Editorial Layout & Photo Director',
    tools: ['PHOTO EDITING', 'COLOR GRADING', 'UI/UX DESIGN', 'PHOTOSHOP', 'TYPOGRAPHY'],
    summary:
      'Autumn / Winter 2026 fashion magazine concept fusing brutalist condensed headlines with sculptural crimson portrait direction.',
    challenge:
      'Establish unmistakable shelf and digital presence using stark black negative space and disciplined crimson framing.',
    outcome:
      'Delivered a modular editorial grid system for print spreads and interactive digital feature previews.',
    deliverables: [
      'Cover & Feature Spread System',
      'Editorial Portrait Color Grade',
      'Interactive Digital Issue Prototype',
    ],
    palette: [
      { name: 'Editorial Pitch', hex: '#0E0E0E' },
      { name: 'Runway Crimson', hex: '#D92323' },
      { name: 'Rose Velvet', hex: '#9F1239' },
      { name: 'Chalk White', hex: '#F5F5F5' },
    ],
    retouchMetrics: {
      exposure: '-0.15 EV',
      contrast: '+40 High Editorial',
      colorProfile: 'Display P3 · Split Tone',
    },
    featured: true,
  },
  {
    id: 'nocturne-audio',
    number: '04',
    title: 'NOCTURNE AUDIO',
    subtitle: 'PRODUCT LIGHTING & CAMPAIGN',
    category: 'Photo Retouching',
    year: '2025',
    client: 'Nocturne Acoustics',
    role: 'Commercial Photo Editor',
    tools: ['PHOTO EDITING', 'COLOR GRADING', 'LIGHTROOM', 'PHOTOSHOP', 'RETOUCHING'],
    summary:
      'Moody anodized aluminum studio retouching for reference over-ear studio headphones and DAC hardware.',
    challenge:
      'Preserve fine brushed-metal micro-texture while eliminating dust and uneven softbox falloff.',
    outcome:
      'Produced crisp campaign key visuals with surgical highlight recovery and deep obsidian background separation.',
    deliverables: [
      'Hardware Compositing & Cleanup',
      'Specular Highlight Sculpting',
      'Social & Web Banner Suite',
    ],
    palette: [
      { name: 'Obsidian', hex: '#09090B' },
      { name: 'Anodized Slate', hex: '#27272A' },
      { name: 'Signal Red', hex: '#D92323' },
      { name: 'Brushed Steel', hex: '#D4D4D8' },
    ],
    retouchMetrics: {
      exposure: '+0.10 EV',
      contrast: '+28 Metallic Clarity',
      colorProfile: 'Adobe RGB · Neutral Cool',
    },
    featured: false,
  },
  {
    id: 'kinetic-lab',
    number: '05',
    title: 'KINETIC LAB',
    subtitle: 'INFORMATICS UI & DESIGN SYSTEM',
    category: 'Editorial & UI/UX',
    year: '2026',
    client: 'ITPLN Student Innovation Lab',
    role: 'UI/UX Designer & Front-End Developer',
    tools: ['UI/UX DESIGN', 'FIGMA', 'HTML / CSS', 'TYPOGRAPHY'],
    summary:
      'Technical showcase platform and modular component library uniting informatics engineering clarity with editorial dark mode.',
    challenge:
      'Organize dense technical documentation and project demos into an immediately scannable, distraction-free interface.',
    outcome:
      'Built a responsive hairline grid system with clear typographic hierarchy and zero-clutter navigation.',
    deliverables: [
      'Figma Token & Component Library',
      'Responsive HTML / CSS Grid System',
      'Interactive Project Index',
    ],
    palette: [
      { name: 'Canvas Black', hex: '#0A0A0A' },
      { name: 'Panel Charcoal', hex: '#141414' },
      { name: 'Beacon Red', hex: '#D92323' },
      { name: 'Muted Silver', hex: '#8E8E93' },
    ],
    retouchMetrics: {
      exposure: '0.00 EV',
      contrast: '+18 UI Crispness',
      colorProfile: 'sRGB · Web Calibrated',
    },
    featured: false,
  },
  {
    id: 'atelier-mono',
    number: '06',
    title: 'ATELIER MONO',
    subtitle: 'PORTRAIT SERIES & MONOGRAPH',
    category: 'Brand Identity',
    year: '2025',
    client: 'Atelier Mono Jakarta',
    role: 'Portrait Retoucher & Visual Designer',
    tools: ['PHOTO EDITING', 'RETOUCHING', 'LIGHTROOM', 'TYPOGRAPHY', 'CANVA PRO'],
    summary:
      'Natural skin-texture portrait retouching and monochrome brand monograph for an independent architectural studio.',
    challenge:
      'Maintain authentic skin pores and fabric weave while unifying mixed indoor-daylight portrait sessions.',
    outcome:
      'Delivered an editorial portrait series with consistent midtone density and refined typographic framing.',
    deliverables: [
      '18 Editorial Studio Portraits',
      'Monograph Grid & Cover Art',
      'Custom Grain & Tone Curve Pack',
    ],
    palette: [
      { name: 'Matte Black', hex: '#111111' },
      { name: 'Warm Chalk', hex: '#E5E2E1' },
      { name: 'Crimson Mark', hex: '#D92323' },
      { name: 'Silver Halide', hex: '#737373' },
    ],
    retouchMetrics: {
      exposure: '+0.30 EV',
      contrast: '+24 Silver Curve',
      colorProfile: 'sRGB · Fine Grain',
    },
    featured: false,
  },
];
