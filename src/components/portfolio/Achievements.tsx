import { useEffect, useRef, useState } from "react";
import { Award, Trophy, Medal, Star } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Dean's Lister", desc: "Consistently achieved academic distinction across multiple semesters.", date: "2021 – 2024" },
  { icon: Award, title: "Best Capstone Project Award", desc: "Recognized for outstanding capstone project in the IT department.", date: "2024" },
  { icon: Medal, title: "Hackathon Finalist", desc: "Reached the finals of the University Hackathon with an innovative web solution.", date: "2023" },
  { icon: Star, title: "Google IT Support Certificate", desc: "Completed the Google IT Support Professional Certificate on Coursera.", date: "2023" },
  { icon: Award, title: "AWS Cloud Practitioner", desc: "Earned the AWS Certified Cloud Practitioner credential.", date: "2023" },
  { icon: Star, title: "freeCodeCamp Full Stack", desc: "Completed the Responsive Web Design and JavaScript certifications.", date: "2022" },
];

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
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Achievements & Certifications</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className={`bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{a.title}</h3>
                  <span className="text-xs text-muted-foreground">{a.date}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
