import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, projectFilters, projectContent, sectionTitles } from "@/data/portfolio-data";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const [expandedIdx, setExpandedIdx] = useState<Set<number>>(new Set());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" ref={ref} className="py-20 bg-secondary/30">
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{sectionTitles.projects}</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {projectFilters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => { setFilter(f); setExpandedIdx(new Set()); }}
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filtered.map((project, i) => {
            const expanded = expandedIdx.has(i);
            return (
              <div
                key={project.title}
                className={`bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => {
                    setSelectedImage(project.image);
                    setModalOpen(true);
                  }}
                />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs ml-2 shrink-0">{project.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                  <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">{projectContent.role}</strong> {project.role}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                    ))}
                  </div>

                  {/* Expandable details */}
                  {expanded && (
                    <div className="space-y-3 mb-4 animate-fade-in text-sm">
                      <div>
                        <strong className="text-foreground">{projectContent.theProblem}</strong>
                        <p className="text-muted-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <strong className="text-foreground">{projectContent.keyFeatures}</strong>
                        <ul className="list-disc list-inside text-muted-foreground">
                          {project.features.map((f) => <li key={f}>{f}</li>)}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-foreground">{projectContent.whatILearned}</strong>
                        <p className="text-muted-foreground">{project.learned}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 flex-wrap">
                    <Button variant="ghost" size="sm" onClick={() => setExpandedIdx(prev => { const newSet = new Set(prev); if (newSet.has(i)) { newSet.delete(i); } else { newSet.add(i); } return newSet; })} className="gap-1 text-primary">
                      {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      {expanded ? projectContent.less : projectContent.details}
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="gap-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> {projectContent.github}
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="gap-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> {projectContent.liveDemo}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for full-size image */}
      {modalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <img
            src={selectedImage}
            alt="Full size screenshot"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            onClick={() => setModalOpen(false)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
