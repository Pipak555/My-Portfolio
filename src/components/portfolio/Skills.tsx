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

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Technical Skills</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-medium px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
