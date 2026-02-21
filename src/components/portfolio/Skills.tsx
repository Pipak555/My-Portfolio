import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { skillCategories, skillIconSlugs, sectionTitles } from "@/data/portfolio-data";

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
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">{sectionTitles.skills}</h2>
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
