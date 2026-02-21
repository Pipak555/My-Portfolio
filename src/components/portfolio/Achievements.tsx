import { useEffect, useRef, useState } from "react";
import { Award, Trophy, Medal, Star } from "lucide-react";
import { achievements as achievementsData, sectionTitles } from "@/data/portfolio-data";

// Icon mapping for achievements
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Award,
  Medal,
  Star,
};

const Achievements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" ref={ref} className="py-20">
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{sectionTitles.achievements}</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((a, i) => {
            const IconComponent = iconMap[a.icon || "Award"] || Award;
            return (
              <div
                key={a.title}
                className={`bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{a.title}</h3>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
