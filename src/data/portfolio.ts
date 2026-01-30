
export const PERSONAL_INFO = {
  name: "Changyu Geng (Mario)",
  title: "Senior Frontend Engineer | Web CAD Specialist",
  tagline: "From Vue.js ecosystems to Angular enterprise solutions, now architecting 3D Web CAD platforms with React & Three.js.",
  socials: {
    github: "https://github.com/KingMario",
    email: "mailto:changyu.geng@gmail.com", // Placeholder or from profile if available (not in profile)
  },
};

export const EXPERIENCE = [
  {
    period: "Present",
    role: "Web CAD Developer",
    company: "Current Company",
    description: "Developing complex Web CAD software using React and Three.js. Focusing on performance optimization, 3D interaction, and geometry processing.",
    tech: ["React", "Three.js", "TypeScript", "WebGL", "Next.js"],
  },
  {
    period: "7 Years",
    role: "Angular Specialist & Contributor",
    company: "VMware",
    description: "Deeply involved in the Angular ecosystem. Contributed to the Clarity Design System and developed enterprise-grade Angular directives. Specialized in building scalable, accessible UI libraries for large-scale management platforms.",
    tech: ["Angular", "Clarity UI", "TypeScript", "RxJS", "SCSS"],
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
    description: "A monorepo collection of high-utility Angular directives and pipes including upperCase, lowerCase, and cleave.js integrations.",
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
  // React / Three.js / Web CAD
  {
    name: "Three.js Dual Controller",
    description: "A 3D interaction example demonstrating complex transform controls for manipulating objects in a 3D space. Reflects my current focus on Web CAD platforms.",
    url: "https://github.com/KingMario/three-example-with-dual-controller",
    tags: ["Three.js", "WebGL", "Interaction"],
    category: "React/Three.js",
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
];
