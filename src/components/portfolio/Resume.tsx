import { useEffect, useRef, useState } from "react";
import { FileText, Code, FolderOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: GraduationCap, label: "BSIT Graduate", value: "2024" },
  { icon: Code, label: "Technologies", value: "20+" },
  { icon: FolderOpen, label: "Projects Completed", value: "10+" },
  { icon: FileText, label: "Certifications", value: "5+" },
];

const Resume = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" ref={ref} className="py-20 bg-secondary/30">
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Resume</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`text-center transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <h.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">{h.value}</p>
              <p className="text-sm text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gap-2">
            <a href="#" download>
              <FileText className="h-4 w-4" />
              Download Resume (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
