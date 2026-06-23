import type { Translations } from '../types'

export const en: Translations = {
  meta: {
    title: 'Iman Akrami — Frontend Developer',
    description:
      'Portfolio of Iman Akrami, a frontend developer specializing in React, TypeScript, and modern web experiences.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    work: 'Work',
    contact: 'Contact',
    hireMe: 'Hire me',
    navigation: 'Navigation',
    theme: 'Theme',
    language: 'Language',
    openMenu: 'Open menu',
  },
  hero: {
    available: 'Available for freelance',
    role: 'Frontend Developer',
    titleBefore: 'Crafting digital',
    titleHighlight: 'experiences',
    titleAfter: 'that matter.',
    description:
      "I'm Iman Akrami — a frontend developer with deep WordPress roots and 3+ years building modern React applications.",
    viewProjects: 'View projects',
    getInTouch: 'Get in touch',
    statYears: 'Years',
    statProjects: 'Projects',
    statReact: 'React',
    basedIn: 'Based in',
    location: 'Turkey · Remote',
    scroll: 'Scroll',
    scrollAria: 'Scroll down',
  },
  about: {
    label: 'About',
    title: 'Building the web, one component at a time',
    description:
      'A passionate developer with a background in computer science and 4+ years of hands-on experience across agencies, product teams, and freelance work.',
    bio1:
      'Results-driven front-end developer specializing in React, Next.js, and TypeScript — delivering high-performance web applications with measurable business impact.',
    bio2:
      'From WordPress agency work to product teams at Lastaar, FaceAge, and Sibirani, I build scalable interfaces, optimize performance, and integrate APIs with modern state management.',
    quote: 'I choose the right tools to deliver scalable, user-focused solutions.',
    highlights: [
      {
        title: 'Frontend Focus',
        description:
          'Specializing in React, TypeScript, and modern UI architecture with performance in mind.',
      },
      {
        title: 'Full-Stack Roots',
        description:
          'Started with WordPress and grew into building scalable, component-driven web apps.',
      },
      {
        title: 'SEO & Performance',
        description:
          'Proven track record delivering optimized, high-ranking websites for businesses.',
      },
      {
        title: 'Adaptable',
        description:
          'Experienced across agencies, startups, and remote product teams worldwide.',
      },
    ],
  },
  experience: {
    label: 'Experience',
    title: "Where I've worked",
    description:
      '4+ years building high-performance web applications with React, Next.js, and TypeScript across product teams and agencies.',
    items: [
      {
        period: 'Aug 2025 — Present',
        location: 'Dubai',
        role: 'Front-end Engineer',
        company: 'FaceAge — FaceGPT (Skin Quiz & Analysis)',
        description:
          'Built interactive quiz and skin analysis UI for web and Shopify. Integrated SDKs and APIs for AI analysis, developed merchant dashboard and analytics, and delivered responsive, performant interfaces.',
        tags: ['React', 'Shopify', 'AI/API', 'TypeScript'],
      },
      {
        period: 'Aug 2025 — Present',
        location: 'Tehran',
        role: 'Front-end Engineer',
        company: 'Sibirani (Iranian App Store)',
        description:
          'Built responsive UI for browsing, authentication, and payments. Integrated APIs for app data and licensing, developed dashboards for app management and analytics, and ensured cross-device compatibility.',
        tags: ['React', 'Next.js', 'REST APIs', 'Dashboards'],
      },
      {
        period: 'Feb 2023 — Aug 2025',
        location: 'Muscat',
        role: 'Front-End Developer',
        company: 'Lastaar — Business Development Services',
        description:
          'Built responsive React & TypeScript apps, boosting engagement and reducing bounce. Optimized APIs and state management, and implemented React Query to cut redundant calls and enhance performance.',
        tags: ['React', 'TypeScript', 'TanStack Query', 'Performance'],
      },
      {
        period: 'Feb 2023 — Jul 2023',
        location: 'Melbourne',
        role: 'WordPress Developer',
        company: 'QuestIdea — Digital Marketing Agency',
        description:
          'Delivered custom WordPress solutions, boosting client satisfaction and cutting development time. Optimized performance to reduce load times, and built PHP features with REST APIs to improve user engagement.',
        tags: ['WordPress', 'PHP', 'REST APIs', 'SEO'],
      },
      {
        period: 'Sep 2019 — Mar 2023',
        location: 'Tehran',
        role: 'Front-End & WordPress Developer',
        company: 'Arsamtech — Design and Development',
        description:
          'Transformed client websites with tailored WordPress solutions. Augmented functionality with React-based elements, driving higher user interaction and conversion rates, and reduced page load speed by 35% through performance optimization.',
        tags: ['WordPress', 'React', 'Performance', 'UI/UX'],
      },
      {
        period: 'Nov 2019 — Sep 2021',
        location: 'Tehran',
        role: 'WordPress Developer',
        company: 'Fixso — Advertising Agency',
        description:
          'Developed 15+ WordPress sites with a 40% sales boost for e-commerce platforms post-launch. Achieved a 40% decrease in loading time, 25% increase in user retention, and a 30% surge in organic traffic through SEO strategies.',
        tags: ['WordPress', 'E-commerce', 'SEO', 'Performance'],
      },
      {
        period: 'May 2018 — Sep 2019',
        location: 'Tehran',
        role: 'Front-End Developer',
        company: 'Rahito — Flight Reservation',
        description:
          'Initiated a component library, reducing code duplication by 35% and expediting development cycles. Integrated real-time flight data for 98% data accuracy, and championed mobile-first practices for a 25% surge in mobile conversions.',
        tags: ['JavaScript', 'Component Library', 'Mobile-first', 'APIs'],
      },
    ],
  },
  work: {
    label: 'Work',
    title: 'Selected projects',
    description:
      'A sample of the kind of work I deliver — from product UIs to optimized business websites.',
    projects: [
      {
        title: 'E-Commerce Platform',
        description:
          'A full-featured online store built with React and TypeScript, featuring cart management, payment integration, and responsive design.',
        tags: ['React', 'TypeScript', 'Tailwind'],
        featured: true,
      },
      {
        title: 'Agency Portfolio Suite',
        description:
          'Custom WordPress themes and React components for multiple agency clients with SEO optimization.',
        tags: ['WordPress', 'React', 'SEO'],
      },
      {
        title: 'Dashboard Application',
        description:
          'An analytics dashboard with real-time data visualization, built for a SaaS product team.',
        tags: ['Next.js', 'Charts', 'API'],
        featured: true,
      },
      {
        title: 'Freelance Business Sites',
        description:
          'High-performing, SEO-optimized websites for small businesses — from design to deployment.',
        tags: ['WordPress', 'SEO', 'Performance'],
      },
      {
        title: 'Component Library',
        description:
          'A reusable UI component system with shadcn/ui and Tailwind, used across multiple projects.',
        tags: ['shadcn/ui', 'Tailwind', 'Storybook'],
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: "Let's work together",
    description:
      "Have a project in mind or want to discuss an opportunity? I'd love to hear from you.",
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    phoneValue: 'Available on request',
    locationValue: 'Turkey · Remote worldwide',
    fullName: 'Full Name',
    phoneField: 'Phone',
    emailField: 'Email',
    message: 'Message',
    namePlaceholder: 'John Doe',
    phonePlaceholder: '1234567890',
    emailPlaceholder: 'john@example.com',
    messagePlaceholder: 'Tell me about your project...',
    send: 'Send Message',
    sending: 'Sending...',
    nameRequired: 'Name is required',
    phoneRequired: 'Phone is required',
    phoneInvalid: 'Numbers only',
    emailRequired: 'Email is required',
    messageRequired: 'Message is required',
    success: "Message sent! I'll get back to you soon.",
    error: 'Something went wrong. Please try again.',
  },
  footer: {
    tagline:
      'Frontend developer crafting modern, performant web experiences with React and TypeScript.',
    navigation: 'Navigation',
    connect: 'Connect',
    rights: '© 2026 Iman Akrami. All rights reserved.',
    builtWith: 'Built with Next.js, GSAP & shadcn/ui',
  },
  notFound: {
    title: 'Page not found',
    description: "Sorry, we couldn't find the page you're looking for.",
    backHome: 'Go back home',
  },
}
