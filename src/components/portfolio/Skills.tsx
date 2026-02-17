import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "React", "Node.js", "Tailwind CSS", "Bootstrap", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools & Software",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "Jira"],
  },
  {
    title: "Operating Systems",
    skills: ["Windows", "Linux (Ubuntu)", "macOS"],
  },
  {
    title: "Soft Skills",
    skills: ["Team Collaboration", "Communication", "Time Management", "Critical Thinking", "Adaptability"],
  },
];

// Mapping of skills to their Simple Icons slugs (for CDN URLs)
// Visit https://simpleicons.org/ to find slugs; most are lowercase with no spaces
const skillIconSlugs: Record<string, string> = {
  Java: "java",
  Python: "python",
  "C++": "cplusplus",
  JavaScript: "javascript",
  TypeScript: "typescript",
  PHP: "php",
  HTML5: "html5",
  CSS3: "css3",
  React: "react",
  "Node.js": "nodedotjs",
  "Tailwind CSS": "tailwindcss",
  Bootstrap: "bootstrap",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Firebase: "firebase",
  Git: "git",
  GitHub: "github",
  "VS Code": "visualstudiocode",
  Figma: "figma",
  Postman: "postman",
  Docker: "docker",
  Jira: "jira",
  Windows: "windows",
  "Linux (Ubuntu)": "linux", // Using "linux" for Ubuntu
  macOS: "apple",
  // Soft skills and "REST APIs" don't have slugs, so they'll be text-only
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-20 bg-background">
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">Technical Skills</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg hover:border-primary/50 hover:scale-105 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const slug = skillIconSlugs[skill];
                  return (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-medium px-3 py-1 flex items-center gap-2 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {slug && (
                        <img
                          src={`https://cdn.simpleicons.org/${slug}/000000/24`}
                          alt={`${skill} logo`}
                          className="h-4 w-4 flex-shrink-0"
                        />
                      )}
                      {skill}
                    </Badge>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;