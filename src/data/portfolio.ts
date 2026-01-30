
export const PERSONAL_INFO = {
  name: "Changyu Geng (Mario)",
  title: "Senior Frontend Engineer | Web CAD Specialist",
  tagline: "From Vue.js ecosystems to Angular enterprise solutions, now architecting 3D Web CAD platforms with React & Three.js.",
  socials: {
    github: "https://github.com/KingMario",
    npm: "https://www.npmjs.com/~kingmario",
    email: "mailto:changyu.geng@gmail.com", // Placeholder or from profile if available (not in profile)
  },
};

export const EXPERIENCE = [
  {
    period: "Present",
    role: "Web CAD Developer",
    company: "AMCAX",
    description: "Developing a next-gen Web CAD platform (next.amcax.net) featuring spatial modeling, sketching, and assembly. Key contributions include:\n• Revolutionized command form development using RJSF (React JSON Schema Form), significantly accelerating feature delivery.\n• Led the 0-1 development of the Assembly module, implementing constraints, linear/circular patterns (with instance skipping), and real-time previews.\n• Developed complex interactive tools: Translation/Rotation dual controllers for part manipulation and customizable mouse control schemes (CATIA/SolidWorks/NX presets).\n• Implemented advanced modeling features: Sketch Slots, Design Tables, Hole features, and a refactored Law Curve input widget.",
    tech: ["React", "Three.js", "RJSF", "TypeScript", "WebGL", "Next.js"],
  },
  {
    period: "7 Years",
    role: "Angular Specialist & Contributor",
    company: "VMware",
    description: "Deeply involved in the Angular ecosystem and Clarity Design System. Key contributions include:\n• Generalized the concept of Angular Pipes in official documentation, advocating for their use as versatile data transformers (e.g., for real-time form validation states like dirty/invalid) beyond simple formatting.\n• Contributed to Angular Core by implementing the 'componentClasses' property for 'router-outlet'.\n• Optimized Clarity UI for micro-frontend architectures and improved accessibility (a11y) through intelligent tabindex management and ARIA enhancements.\nSpecialized in building scalable, accessible UI libraries for large-scale management platforms.",
    tech: ["Angular Core", "Clarity UI", "RxJS", "TypeScript", "A11y"],
  },
  {
    period: "Early Career",
    role: "Vue.js Ecosystem Contributor",
    company: "Open Source",
    description: "Active contributor to the Vue.js 1.0/2.0 core and ecosystem. Implemented the 'v-on.once' modifier and runtime warnings in Vue core. Contributed significantly to v2.vuejs.org documentation, clarifying 'render function priorities' and 'event modifiers'. Authored Vuex best practices (form handling) and contributed to vue-i18n.",
    tech: ["Vue.js Core", "Vue Docs", "Vuex", "Open Source"],
  },
];

export const PROJECTS = [
  // Vue Era
  {
    name: "Vue Course Slides",
    description: "An educational demonstration of Vue.js, Webpack, and vue-loader configuration, including live editing result previews.",
    url: "https://github.com/KingMario/vue-course-code-slide",
    tags: ["Webpack", "Vue.js", "Education"],
    category: "Vue",
  },
  {
    name: "Clarity Icons Vue",
    description: "A Vue.js component wrapper for VMware's Clarity Icons, enabling easy integration of the enterprise icon set into Vue applications.",
    url: "https://www.npmjs.com/package/clarity-icons-vue",
    tags: ["Vue.js", "Clarity UI", "NPM"],
    category: "Vue",
  },
  {
    name: "XML Minify Loader",
    description: "A Webpack loader to minify XML files, optimizing bundle size for applications with heavy XML data dependencies.",
    url: "https://www.npmjs.com/package/xml-minify-loader",
    tags: ["Webpack", "Tooling", "NPM"],
    category: "Vue",
  },
  // Angular Era
  {
    name: "Angular Reactive Forms Samples",
    description: "A comprehensive collection of advanced Reactive Forms patterns and samples, recently updated to reflect modern Angular best practices.",
    url: "https://github.com/KingMario/angular-reactive-forms-samples",
    tags: ["Angular", "Reactive Forms", "Best Practices"],
    category: "Angular",
  },
  {
    name: "Mario's Packages",
    description: "A monorepo collection of high-utility Angular directives and pipes including upperCase, lowerCase, and cleave.js integrations. Published on NPM.",
    url: "https://github.com/KingMario/packages",
    tags: ["Angular", "Monorepo", "Utils"],
    category: "Angular",
  },
  {
    name: "NgxTrimDirectiveDemo",
    description: "A popular Angular directive to automatically trim form input values. Part of my suite of Angular utility packages with thousands of monthly downloads.",
    url: "https://github.com/KingMario/ngx-trim-directive",
    tags: ["Angular", "Open Source", "NPM"],
    category: "Angular",
  },
  // Three.js / Web CAD
  {
    name: "Three.js Dual Controller",
    description: "A 3D interaction example demonstrating complex transform controls for manipulating objects in a 3D space. Reflects my current focus on Web CAD platforms.",
    url: "https://github.com/KingMario/three-example-with-dual-controller",
    tags: ["Three.js", "WebGL", "Interaction"],
    category: "Three.js",
  },
  // Hobby / Utilities
  {
    name: "SmartProxy",
    description: "A high-performance utility for managing proxy configurations, written in Go to ensure speed and reliability.",
    url: "https://github.com/KingMario/SmartProxy",
    tags: ["Go", "Network", "Tool"],
    category: "Hobby",
  },
  {
    name: "Workout Timer",
    description: "A modern, TypeScript-based fitness application designed for personal interval training and workout tracking.",
    url: "https://github.com/KingMario/workout-timer",
    tags: ["TypeScript", "PWA", "Fitness"],
    category: "Hobby",
  },
  {
    name: "Baidu Map Indoor Lite",
    description: "A specialized solution for Baidu Map customized layer tiles cutting, enabling efficient indoor map rendering and management.",
    url: "https://github.com/KingMario/Baidu-Map-Indoor-Lite",
    tags: ["GIS", "Baidu Map", "Tiling"],
    category: "Hobby",
  },
  // Patents
  {
    name: "Medical Image Pyramid Representation Patent",
    description: "Invention Patent: An improved secondary cutting pyramid representation for very large medical images remote viewer. Focuses on optimizing data transfer and rendering for massive datasets.",
    url: "https://patents.google.com/patent/CN104376530A/en",
    tags: ["Medical Imaging", "Pyramid Representation", "Patent"],
    category: "Patents",
  },
];
