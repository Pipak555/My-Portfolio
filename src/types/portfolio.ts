// ============================================
// STRICT TYPE DEFINITIONS FOR PORTFOLIO DATA
// ============================================

// ============================================
// PROJECT TYPES
// ============================================

export type ProjectCategory = "Web" | "Desktop" | "Educational" | "Other";

export interface Project {
  title: string;
  desc: string;
  problem: string;
  tech: string[];
  role: string;
  features: string[];
  learned: string;
  category: ProjectCategory;
  demoUrl: string;
  githubUrl: string;
  image: string;
}

export type ProjectFilter = "All" | ProjectCategory;

// ============================================
// SKILL TYPES
// ============================================

export interface SkillCategory {
  title: string;
  skills: readonly string[];
}

export interface SkillIconSlug {
  [skill: string]: string;
}

// ============================================
// EXPERIENCE TYPES
// ============================================

export type ExperienceIcon = "Briefcase" | "BookOpen" | "Award" | "Users";

export interface ExperienceItem {
  readonly title: string;
  readonly date: string;
  readonly desc: string;
  readonly icon?: ExperienceIcon;
}

// ============================================
// EDUCATION TYPES
// ============================================

export interface EducationItem {
  readonly degree: string;
  readonly university: string;
  readonly year: string;
}

// ============================================
// CONTACT TYPES
// ============================================

export interface ContactInfo {
  readonly label: string;
  readonly href: string;
}

export interface SocialLink {
  readonly name: string;
  readonly href: string;
  readonly icon: string;
}

// ============================================
// PERSONAL INFO TYPES
// ============================================

export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly tagline: string;
  readonly email: string;
  readonly phone: string;
  readonly linkedin: string;
  readonly github: string;
  readonly website: string;
  readonly profileImage: string;
}

// ============================================
// SECTION TITLES
// ============================================

export interface SectionTitles {
  readonly about: string;
  readonly skills: string;
  readonly projects: string;
  readonly experience: string;
  readonly achievements: string;
  readonly contact: string;
  readonly resume: string;
}

// ============================================
// HERO CONTENT
// ============================================

export interface HeroContent {
  readonly greeting: string;
  readonly viewProjects: string;
  readonly downloadResume: string;
  readonly contactMe: string;
}

// ============================================
// FORM CONTENT
// ============================================

export interface FormContent {
  readonly namePlaceholder: string;
  readonly emailPlaceholder: string;
  readonly subjectPlaceholder: string;
  readonly messagePlaceholder: string;
  readonly sendButton: string;
  readonly sendingButton: string;
  readonly contactIntro: string;
  readonly successMessage: string;
  readonly successDescription: string;
  readonly errorMessage: string;
  readonly errorDescription: string;
}

// ============================================
// RESUME CONTENT
// ============================================

export interface ResumeContent {
  readonly downloadButton: string;
}

// ============================================
// FOOTER CONTENT
// ============================================

export interface FooterContent {
  readonly tagline: string;
}

// ============================================
// ABOUT CONTENT
// ============================================

export interface AboutEducation {
  readonly degree: string;
  readonly university: string;
  readonly year: string;
}

export interface AboutContent {
  readonly introduction: string;
  readonly background: string;
  readonly education: AboutEducation;
}

// ============================================
// STRENGTHS TYPES
// ============================================

export interface Strength {
  readonly title: string;
  readonly desc: string;
  readonly icon?: string;
}

// ============================================
// ACHIEVEMENTS TYPES
// ============================================

export interface Achievement {
  readonly title: string;
  readonly desc: string;
  readonly date: string;
  readonly icon?: string;
}

// ============================================
// RESUME HIGHLIGHTS
// ============================================

export interface ResumeHighlight {
  readonly label: string;
  readonly value: string;
}

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

// ============================================
// PROJECT CONTENT
// ============================================

export interface ProjectContent {
  readonly details: string;
  readonly less: string;
  readonly liveDemo: string;
  readonly github: string;
  readonly whatILearned: string;
  readonly keyFeatures: string;
  readonly role: string;
  readonly techStack: string;
  readonly theProblem: string;
}
