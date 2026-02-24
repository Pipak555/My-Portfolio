// Centralized portfolio data
// All content should be managed from this file

import type {
  PersonalInfo,
  SectionTitles,
  HeroContent,
  FormContent,
  ResumeContent,
  FooterContent,
  SkillCategory,
  SkillIconSlug,
  Project,
  ProjectFilter,
  ProjectContent,
  ExperienceItem,
  Achievement,
  Strength,
  AboutContent,
  ResumeHighlight,
  ContactInfo,
  SocialLink,
  NavLink,
} from "@/types/portfolio";

// React Icons - Simple Icons (Si) and Lucide React (Lu) for icons not in Si
import { SiPython, SiCplusplus, SiJavascript, SiTypescript, SiPhp, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiTailwindcss, SiBootstrap, SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiGit, SiGithub, SiFigma, SiPostman, SiDocker, SiJira, SiLinux, SiApple } from "react-icons/si";
import { LuFileCode, LuCode, LuMonitor } from "react-icons/lu";
import type { IconType } from "react-icons";

// ============================================
// PERSONAL INFORMATION
// ============================================

export const personalInfo: PersonalInfo = {
  name: "John Patrick S. Robles",
  title: "BSIT Graduate | Aspiring Software Developer",
  tagline: "Transforming ideas into elegant digital solutions. Passionate about building software that makes a difference.",
  email: "johnpatrickrobles143@gmail.com",
  phone: "+63 906 364 6349",
  linkedin: "www.linkedin.com/in/john-patrick-robles-47174135b",
  github: "https://github.com/Pipak555",
  website: "johnpatrickrobles.dev",
profileImage: "/profile.jpg",
};

// ============================================
// SECTION TITLES
// ============================================

export const sectionTitles: SectionTitles = {
  about: "About Me",
  skills: "Technical Skills",
  projects: "Projects",
  experience: "Experience & Training",
  achievements: "Achievements & Certifications",
  contact: "Get In Touch",
  resume: "Resume",
};

// ============================================
// HERO SECTION
// ============================================

export const heroContent: HeroContent = {
  greeting: "Hello, I'm",
  viewProjects: "View Projects",
  downloadResume: "Download Resume",
  contactMe: "Contact Me",
};

// ============================================
// FORM CONTENT
// ============================================

export const formContent: FormContent = {
  namePlaceholder: "Your Name",
  emailPlaceholder: "Your Email",
  subjectPlaceholder: "Subject",
  messagePlaceholder: "Your Message",
  sendButton: "Send Message",
  sendingButton: "Sending...",
  contactIntro: "I'm always open to discussing new opportunities, collaborations, or just a friendly chat about technology. Feel free to reach out!",
  successMessage: "Message Sent!",
  successDescription: "Thank you for reaching out. I'll get back to you soon.",
  errorMessage: "Error",
  errorDescription: "Failed to send message. Please try again later.",
};

// ============================================
// RESUME SECTION
// ============================================

export const resumeContent: ResumeContent = {
  downloadButton: "Download Resume (PDF)",
};

// ============================================
// FOOTER CONTENT
// ============================================

export const footerContent: FooterContent = {
  tagline: "Dedicated to continuous growth and building technology solutions that matter. Let's create something great together.",
};

// ============================================
// SKILLS DATA - OPTIMIZED FOR HIRING (12-15 core skills)
// ============================================

/*
 * OPTIMIZATION NOTES:
 * - Limited to 12-15 core technical skills (recruiter scan optimization)
 * - Removed soft skills (not relevant for skills section - move to About)
 * - Grouped by proficiency: Languages → Frameworks → Tools
 * - Each skill should have project proof in Projects section
 */

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "PHP"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "Firebase", "MySQL", "MongoDB", "Postman"],
  },
];

// Mapping of skills to their icon components (no external CDN requests)
export const skillIcons: Record<string, IconType> = {
  Java: LuFileCode,
  Python: SiPython,
  "C++": SiCplusplus,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  React: SiReact,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": LuCode,
  Figma: SiFigma,
  Postman: SiPostman,
  Docker: SiDocker,
  Jira: SiJira,
  Windows: LuMonitor,
  "Linux (Ubuntu)": SiLinux,
  macOS: SiApple,
};

// ============================================
// PROJECTS DATA
// ============================================

export const projects: Project[] = [
  {
    title: "Student Information Management System",
    desc: "A comprehensive web application for managing student records, grades, and enrollment processes.",
    problem: "Manual record-keeping caused data inconsistencies and slow processing for university staff.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    role: "Full-Stack Developer",
    features: ["CRUD operations", "Role-based access", "Report generation", "Search & filtering"],
    learned: "Strengthened my understanding of database normalization, MVC architecture, and user authentication patterns.",
    category: "Web",
    demoUrl: "https://your-unique-demo-url-for-student-system.com",
    githubUrl: "https://github.com/your-repo-for-student-system",
    image: "/path/to/student-system-screenshot.jpg",
  },
  {
    title: "Mojo Dojo Casa House — Experiences & Bookings",
    desc: "A dynamic web platform showcasing unique stays and experience bookings with engaging visuals, browsing, and reservation features.",
    problem: "Travelers and experience seekers needed an intuitive way to discover and book interesting homes and curated local experiences.",
    tech: ["React", "Firebase Hosting", "JavaScript", "CSS"],
    role: "Frontend Developer",
    features: ["Searchable listings", "Responsive UI", "Interactive experience pages", "Easy booking navigation"],
    learned: "Improved skills in building interactive UI components, integrating hosting services, and optimizing user flows for discovery and engagement.",
    category: "Web",
    demoUrl: "https://mojo-dojo-casa-house-80845.web.app/",
    githubUrl: "https://github.com/Pipak555/Pipak555-Mag-cocommit-na-talga",
image: "/Mojo.png",
  },
  {
    title: "Network Monitoring Dashboard",
    desc: "A real-time dashboard for monitoring network devices, bandwidth usage, and system health.",
    problem: "IT teams had no centralized view of network performance, leading to delayed incident response.",
    tech: ["Python", "Flask", "PostgreSQL", "Chart.js"],
    role: "Backend Developer",
    features: ["Real-time monitoring", "Alert notifications", "Performance graphs", "Device inventory"],
    learned: "Deepened my knowledge of networking protocols, data visualization, and backend optimization.",
    category: "Desktop",
    demoUrl: "https://your-unique-demo-url-for-network-dashboard.com",
    githubUrl: "https://github.com/your-repo-for-network-dashboard",
    image: "/path/to/network-dashboard-screenshot.jpg",
  },
  {
    title: "BSU Bustos Student Handbook App",
    desc: "An interactive Android app providing Bulacan State University – Bustos Campus students with a dynamic handbook, featuring academic policies, campus services, and student resources for a seamless experience.",
    problem: "Students needed an easy-to-access, centralized digital handbook to navigate academic guidelines, campus services, and student resources efficiently.",
    tech: ["Android Studio", "Java/Kotlin", "SQLite"],
    role: "Lead Developer",
    features: ["Academic policies overview", "Campus services directory", "Searchable student resources", "Intuitive navigation", "Notifications for updates"],
    learned: "Gained experience in Android development, app navigation design, local database management, and user-friendly mobile UI/UX design.",
    category: "Educational",
    demoUrl: "https://your-demo-url-for-student-handbook.com",
    githubUrl: "https://github.com/Pipak555/Bulacan-State-University-Bustos-Campus-Student-Handbook",
image: "/App.png",
  },
];

export const projectFilters: ProjectFilter[] = ["All", "Web", "Desktop", "Other"];

// Project section content
export const projectContent: ProjectContent = {
  details: "Details",
  less: "Less",
  liveDemo: "Live Demo",
  github: "GitHub",
  whatILearned: "What I Learned:",
  keyFeatures: "Key Features:",
  role: "Role:",
  techStack: "Tech Stack:",
  theProblem: "The Problem:",
};

// ============================================
// EXPERIENCE DATA
// ============================================

export const experienceTimeline: ExperienceItem[] = [
  {
    title: "IT Intern — Company Name",
    date: "Jan 2024 – Apr 2024",
    desc: "Assisted in developing and maintaining internal web applications. Provided technical support and collaborated with the development team on feature implementations.",
    icon: "Briefcase",
  },
  {
    title: "Capstone Project — Student Information System",
    date: "Aug 2023 – Dec 2023",
    desc: "Led a team of four in designing and developing a full-stack student information management system as a capstone requirement.",
    icon: "BookOpen",
  },
  {
    title: "Web Development Workshop",
    date: "Jun 2023",
    desc: "Completed an intensive workshop on modern web development covering React, Node.js, and cloud deployment strategies.",
    icon: "Award",
  },
  {
    title: "National IT Conference Attendee",
    date: "Mar 2023",
    desc: "Participated in the National IT Conference, gaining insights on emerging technologies, cybersecurity, and career development.",
    icon: "Users",
  },
  {
    title: "Cisco Networking Academy Certificate",
    date: "2022",
    desc: "Completed the CCNA Introduction to Networks course, covering networking fundamentals and protocols.",
    icon: "Award",
  },
];

// ============================================
// ACHIEVEMENTS DATA
// ============================================

export const achievements: Achievement[] = [
  {
    title: "Dean's Lister",
    desc: "Consistently achieved academic distinction across multiple semesters.",
    date: "2021 – 2024",
    icon: "Trophy",
  },
  {
    title: "Best Capstone Project Award",
    desc: "Recognized for outstanding capstone project in the IT department.",
    date: "2024",
    icon: "Award",
  },
  {
    title: "Hackathon Finalist",
    desc: "Reached the finals of the University Hackathon with an innovative web solution.",
    date: "2023",
    icon: "Medal",
  },
  {
    title: "Google IT Support Certificate",
    desc: "Completed the Google IT Support Professional Certificate on Coursera.",
    date: "2023",
    icon: "Star",
  },
  {
    title: "AWS Cloud Practitioner",
    desc: "Earned the AWS Certified Cloud Practitioner credential.",
    date: "2023",
    icon: "Award",
  },
  {
    title: "freeCodeCamp Full Stack",
    desc: "Completed the Responsive Web Design and JavaScript certifications.",
    date: "2022",
    icon: "Star",
  },
];

// ============================================
// ABOUT SECTION DATA
// ============================================

export const strengths: Strength[] = [
  { title: "Problem Solver", desc: "Analytical thinker who thrives on breaking down complex challenges.", icon: "Target" },
  { title: "Continuous Learner", desc: "Always exploring new technologies and methodologies.", icon: "Lightbulb" },
  { title: "Team Player", desc: "Collaborative communicator who values diverse perspectives.", icon: "Users" },
  { title: "Detail-Oriented", desc: "Meticulous approach to code quality and documentation.", icon: "GraduationCap" },
];

export const aboutContent: AboutContent = {
  introduction: `I am a recent Bachelor of Science in Information Technology graduate with a strong foundation in software development, web technologies, and IT systems. I am passionate about leveraging technology to solve real-world problems and deliver impactful solutions.`,
  background: `My academic journey equipped me with hands-on experience in full-stack development, database management, and system analysis. I am eager to contribute to a dynamic team where I can apply my skills, grow professionally, and make a meaningful impact.`,
  education: {
    degree: "B.S. Information Technology",
    university: "Bulacan State University - Bustos Campus",
    year: "2024",
  },
};

// ============================================
// RESUME HIGHLIGHTS DATA
// ============================================

export const resumeHighlights: ResumeHighlight[] = [
  { label: "BSIT Graduate", value: "2024" },
  { label: "Technologies", value: "20+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Certifications", value: "5+" },
];

// ============================================
// CONTACT DATA
// ============================================

export const contactInfo: ContactInfo[] = [
  { label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { label: `linkedin.com/in/John Patrick Robles`, href: `https://${personalInfo.linkedin}` },
  { label: `github.com/johnpatrickrobles`, href: personalInfo.github },
  { label: personalInfo.website, href: "#" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: personalInfo.github, icon: "Github" },
  { name: "LinkedIn", href: `https://${personalInfo.linkedin}`, icon: "Linkedin" },
  { name: "Email", href: `mailto:${personalInfo.email}`, icon: "Mail" },
];

// ============================================
// NAVIGATION DATA
// ============================================

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
