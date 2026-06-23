export type Locale = 'en' | 'fa'

export interface ExperienceItem {
  period: string
  location: string
  role: string
  company: string
  description: string
  tags: string[]
}

export interface HighlightItem {
  title: string
  description: string
}

export interface ProjectItem {
  title: string
  description: string
  tags: string[]
  href?: string
  featured?: boolean
}

export interface Translations {
  meta: {
    title: string
    description: string
  }
  nav: {
    home: string
    about: string
    experience: string
    work: string
    contact: string
    hireMe: string
    navigation: string
    theme: string
    language: string
    openMenu: string
  }
  hero: {
    available: string
    role: string
    titleBefore: string
    titleHighlight: string
    titleAfter: string
    description: string
    viewProjects: string
    getInTouch: string
    statYears: string
    statProjects: string
    statReact: string
    basedIn: string
    location: string
    scroll: string
    scrollAria: string
  }
  about: {
    label: string
    title: string
    description: string
    bio1: string
    bio2: string
    quote: string
    highlights: HighlightItem[]
  }
  experience: {
    label: string
    title: string
    description: string
    items: ExperienceItem[]
  }
  work: {
    label: string
    title: string
    description: string
    projects: ProjectItem[]
  }
  contact: {
    label: string
    title: string
    description: string
    email: string
    phone: string
    location: string
    phoneValue: string
    locationValue: string
    fullName: string
    phoneField: string
    emailField: string
    message: string
    namePlaceholder: string
    phonePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    send: string
    sending: string
    nameRequired: string
    phoneRequired: string
    phoneInvalid: string
    emailRequired: string
    messageRequired: string
    success: string
    error: string
  }
  footer: {
    tagline: string
    navigation: string
    connect: string
    rights: string
    builtWith: string
  }
  notFound: {
    title: string
    description: string
    backHome: string
  }
}
