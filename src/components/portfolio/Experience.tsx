import { useEffect, useRef, useState } from "react";
import { Briefcase, BookOpen, Award, Users } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    title: "IT Intern — [Company Name]",
    date: "Jan 2024 – Apr 2024",
    desc: "Assisted in developing and maintaining internal web applications. Provided technical support and collaborated with the development team on feature implementations.",
  },
  {
    icon: BookOpen,
    title: "Capstone Project — Student Information System",
    date: "Aug 2023 – Dec 2023",
    desc: "Led a team of four in designing and developing a full-stack student information management system as a capstone requirement.",
  },
  {
    icon: Award,
    title: "Web Development Workshop",
    date: "Jun 2023",
    desc: "Completed an intensive workshop on modern web development covering React, Node.js, and cloud deployment strategies.",
  },
  {
    icon: Users,
    title: "National IT Conference Attendee",
    date: "Mar 2023",
    desc: "Participated in the National IT Conference, gaining insights on emerging technologies, cybersecurity, and career development.",
  },
  {
    icon: Award,
    title: "Cisco Networking Academy Certificate",
    date: "2022",
    desc: "Completed the CCNA Introduction to Networks course, covering networking fundamentals and protocols.",
  },
];

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Experience & Training</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative pl-16 transition-all duration-500 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="absolute left-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className="text-xs text-muted-foreground font-medium">{item.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
