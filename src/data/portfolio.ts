
export const PERSONAL_INFO = {
  name: "Changyu Geng (Mario)",
  title: "Senior Frontend Engineer | Web CAD Specialist | Open Source Contributor",
  tagline: "From Vue.js ecosystems to Angular enterprise solutions, now architecting 3D Web CAD platforms with React & Three.js.",
  socials: {
    github: "https://github.com/KingMario",
    npm: "https://www.npmjs.com/~kingmario",
  },
};

export const EXPERIENCE = [
  {
    period: "2024 - Present",
    role: "Senior Frontend Software Engineer",
    company: "Jiushao Intelligent Tech (AMCAX)",
    description: "Architecting the next-gen Web CAD platform (next.amcax.net). Key achievements:\n• Established core architectural standards: implemented GitLab CI/CD pipelines, enforced strict TypeScript/ESLint rules, and initiated biweekly tech sharing sessions.\n• SDK Infrastructure: Led the modular packaging of AMCAX SDK using Rollup, publishing to internal npm for cross-project reusability.\n• Command Framework: Revolutionized feature delivery by customizing RJSF (JSON Schema Form) for complex CAD command inputs.\n• Assembly & Constraints: Led the 0-1 development of the Assembly module, implementing 3D constraints, linear/circular patterns, and real-time animation previews.\n• Interactive Tools: Developed high-precision 3D controllers (Translate/Rotate), custom mouse control schemes (CATIA/SolidWorks/NX).\n• Advanced Modeling: Implemented high-impact features including Hole, Sketch Rabbet, and Law Curve.",
    tech: ["React", "Three.js", "RJSF", "TypeScript", "WebGL", "Rollup", "GitLab CI"],
  },
  {
    period: "2017 - 2024",
    role: "Staff Software Engineer",
    company: "VMware",
    description: "Led frontend development for cloud management and commerce platforms. Key contributions:\n• VCPP Commerce Portal: Developed core modules for usage reports, billing, and email notification configurations.\n• Usage Meter Appliance: Architected a scalable dashboard fully compliant with international accessibility (A11y) standards, using Angular and RxJS.\n• Cloud Director Integration: Led the Object Storage Extension UI, integrating bucket/object management into the vApp ecosystem.\n• Community & Mentorship: Acted as problem setter for VMware China Coding Competition (CCC) and significantly improved team practices through rigorous code reviews.",
    tech: ["Angular", "RxJS", "NgRx", "TypeScript", "Clarity UI", "A11y"],
  },
  {
    period: "Early Career",
    role: "Senior Software Engineer & Tech Lead",
    company: "Waylens | CTrip | Yunshung",
    description: "Diverse experience across automotive, travel, and medical tech:\n• Waylens: Developed video portals and overlay gauge APIs for automotive camera systems using React and Vue.\n• Yunshung: Tech Lead for a Remote Radiology Diagnosis Platform; patented an improved pyramid representation for massive medical images.",
    tech: ["Vue.js", "React", "Node.js", "Medical Imaging", "GIS"],
  },
];

export const OPEN_SOURCE = [
  {
    category: "Angular Ecosystem",
    contributions: [
      "Angular Documentation: Generalized the concept of Pipes, advocating for their use as versatile data transformers (e.g., real-time form state validation) beyond simple formatting.",
      "Clarity Design System: Optimized for micro-frontend architectures and improved A11y through intelligent tabindex management and ARIA enhancements.",
      "Utility Packages: Authored and maintained popular directives like 'ngx-trim-directive' (10K+ weekly downloads) and 'ngx-cleave-directive' (2K+ weekly downloads), providing seamless integrations for enterprise forms.",
    ],
    tech: ["Angular", "RxJS", "TypeScript", "A11y"],
  },
  {
    category: "Vue.js Ecosystem",
    contributions: [
      "Vue.js Core: Implemented the 'v-on.once' modifier and critical runtime warnings in Vue 1.0/2.0 core.",
      "Community Leadership: Authored the 'Think in Vue' Zhihu column (19 deep-dive articles). Served as the #1 contributor for the Vue.js tag on SegmentFault from 2016-2019, and maintained a Top 10 ranking for nearly 8 years until 2023.",
      "Vue.js Documentation: Clarified key concepts including 'render function priorities' and 'event modifiers' in the official v2.vuejs.org guide.",
      "Ecosystem: Authored Vuex best practices for form handling and contributed to 'vue-i18n' localization features.",
    ],
    tech: ["Vue.js", "Vuex", "Webpack", "i18n"],
  },
];

export const PROJECTS = [
  // Professional Projects
  {
    name: "AMCAX Web CAD Platform",
    description:
      "Architecting core modules for a browser-based 3D modeling system. Key features include the Assembly constraint solver, command framework, and high-performance 3D visualization for complex models.",
    url: "https://next.amcax.net",
    tags: ["React", "Three.js", "CAD", "WebGL"],
    category: "Professional",
  },
  {
    name: "VMware Usage Meter",
    description:
      "An enterprise-scale SaaS dashboard for global resource tracking. Focused on high availability, accessibility (WCAG), and seamless integration with VMware Cloud Director.",
    url: "https://www.vmware.com/products/cloud-infrastructure/vcf-usage-meter",
    tags: ["Angular", "A11y", "Enterprise", "RxJS"],
    category: "Professional",
  },
  {
    name: "VCD Object Storage Extension",
    description: "Architected the UI for integrating S3-compatible object storage into VMware Cloud Director, allowing service providers to manage buckets and objects at scale.",
    url: "https://www.vmware.com/products/cloud-infrastructure/cloud-director/object-storage-extension",
    tags: ["Angular", "Cloud", "S3", "Enterprise"],
    category: "Professional",
  },
  {
    name: "VCPP Commerce Portal",
    description: "Built key modules for the cloud provider commerce platform, including complex usage reporting, billing configurations, and automated email notification systems.",
    url: "https://blogs.vmware.com/cloudprovider/2020/02/introducing-the-new-vcpp-commerce-portal.html",
    tags: ["Angular", "CloudOps", "Management", "Enterprise"],
    category: "Professional",
  },
  {
    name: "Medical Image Pyramid (Patent)",
    description:
      "A mission-critical remote radiology platform. Patented an improved pyramid representation algorithm for high-performance viewing of ultra-large medical datasets.",
    url: "https://patents.google.com/patent/CN104376530A/en",
    tags: ["Medical Tech", "Node.js", "GIS", "Patent"],
    category: "Professional",
  },
  // Open Source & Tools
  {
    name: "Angular Utility Packages",
    description:
      "A high-utility monorepo featuring 'ngx-trim-directive' (10K+ weekly downloads) and 'ngx-cleave-directive'. Demonstrates advanced Angular patterns and enterprise-grade utility management.",
    url: "https://github.com/KingMario/packages",
    tags: ["Angular", "Monorepo", "Open Source", "NPM"],
    category: "Angular",
  },
  {
    name: "Angular Reactive Forms Samples",
    description:
      "A comprehensive collection of advanced Reactive Forms patterns, demonstrating best practices for complex state management in Angular.",
    url: "https://github.com/KingMario/angular-reactive-forms-samples",
    tags: ["Angular", "Reactive Forms", "Best Practices"],
    category: "Angular",
  },
  {
    name: "Three.js Dual Controller",
    description:
      "A 3D interaction library demonstrating complex transform controls for manipulating objects, reflecting deep expertise in WebGL-based interaction.",
    url: "https://github.com/KingMario/three-example-with-dual-controller",
    tags: ["Three.js", "WebGL", "Interaction"],
    category: "Three.js",
  },
  {
    name: "SmartProxy",
    description:
      "A high-performance proxy management utility written in Go, focusing on speed, reliability, and efficient network routing.",
    url: "https://github.com/KingMario/SmartProxy",
    tags: ["Go", "Network", "Tool"],
    category: "Hobby",
  },
  {
    name: "Clarity Icons Vue",
    description:
      "Vue.js component wrapper for VMware's Clarity Icons, enabling easy integration of enterprise design tokens into Vue applications.",
    url: "https://www.npmjs.com/package/clarity-icons-vue",
    tags: ["Vue.js", "Clarity UI", "NPM"],
    category: "Vue",
  },
  {
    name: "Vue Course Slides",
    description: "An educational demonstration of Vue.js, Webpack, and vue-loader configuration, including live editing result previews.",
    url: "https://github.com/KingMario/vue-course-code-slide",
    tags: ["Webpack", "Vue.js", "Education"],
    category: "Vue",
  },
  {
    name: "Baidu Map Indoor Lite",
    description:
      "A GIS utility for customized layer tile cutting, enabling efficient indoor map rendering and management for large venues.",
    url: "https://github.com/KingMario/Baidu-Map-Indoor-Lite",
    tags: ["GIS", "Baidu Map", "Tiling"],
    category: "Hobby",
  },
  {
    name: "Index File Manager VSCode Extension",
    description: "Automates directory cleanup with bi-directional renaming between 'index' files and their parent folders (e.g., Button/index.tsx ↔ Button.tsx). Also features a command to auto-generate index files with bulk exports from all sub-files.",
    url: "https://github.com/KingMario/folder4index",
    tags: ["VSCode", "Extension", "Tool"],
    category: "Hobby",
  },
  {
    name: "Peptide Segment Conjecture",
    description: "A specialized utility for biological research that conjectures possible peptide segments based on molecular weight and biochemical constraints.",
    url: "https://github.com/KingMario/peptide-segment-conjecture",
    tags: ["Biotech", "Algorithms", "Utility"],
    category: "Hobby",
  },
  {
    name: "Workout Timer",
    description: "A modern, AI-assisted (Vibe Coding) fitness application designed for personal interval training and workout tracking.",
    url: "https://github.com/KingMario/workout-timer",
    tags: ["TypeScript", "PWA", "AI-Generated", "VibeCoding"],
    category: "Hobby",
  },
];
