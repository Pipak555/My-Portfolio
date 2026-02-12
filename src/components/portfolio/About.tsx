import { useEffect, useRef, useState } from "react";
import { GraduationCap, Target, Lightbulb, Users } from "lucide-react";

const strengths = [
  { icon: Target, title: "Problem Solver", desc: "Analytical thinker who thrives on breaking down complex challenges." },
  { icon: Lightbulb, title: "Continuous Learner", desc: "Always exploring new technologies and methodologies." },
  { icon: Users, title: "Team Player", desc: "Collaborative communicator who values diverse perspectives." },
  { icon: GraduationCap, title: "Detail-Oriented", desc: "Meticulous approach to code quality and documentation." },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 bg-secondary/30">
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">About Me</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto mb-16 space-y-5 text-muted-foreground text-center text-base sm:text-lg leading-relaxed">
          <p>
            I am a recent Bachelor of Science in Information Technology graduate with a strong foundation in software development, web technologies, and IT systems. I am passionate about leveraging technology to solve real-world problems and deliver impactful solutions.
          </p>
          <p>
            My academic journey equipped me with hands-on experience in full-stack development, database management, and system analysis. I am eager to contribute to a dynamic team where I can apply my skills, grow professionally, and make a meaningful impact.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">B.S. Information Technology — [University Name], 2024</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => (
            <div
              key={s.title}
              className={`bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
