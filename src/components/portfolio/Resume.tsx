import { FileText, Code, FolderOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { resumeHighlights, sectionTitles, resumeContent } from "@/data/portfolio-data";

// Icon mapping for resume highlights
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Code,
  FolderOpen,
  FileText,
};

const Resume = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Map resume highlights to icons
  const getIcon = (label: string) => {
    if (label.includes("Graduate")) return GraduationCap;
    if (label.includes("Technologies")) return Code;
    if (label.includes("Projects")) return FolderOpen;
    if (label.includes("Certifications")) return FileText;
    return FileText;
  };

  return (
    <section id="resume" ref={ref} className="py-20 bg-secondary/30">
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{sectionTitles.resume}</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          {resumeHighlights.map((h, i) => {
            const IconComponent = getIcon(h.label);
            return (
              <div
                key={h.label}
                className={`text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">{h.value}</p>
                <p className="text-sm text-muted-foreground">{h.label}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gap-2">
            <a href="#" download>
              <FileText className="h-4 w-4" />
              {resumeContent.downloadButton}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
