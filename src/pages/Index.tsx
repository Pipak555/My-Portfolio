import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import BackToTop from "@/components/portfolio/BackToTop";

/*
 * OPTIMIZED PORTFOLIO STRUCTURE FOR HIRING EFFECTIVENESS
 * 
 * Order Rationale (based on recruiter 6-second scan pattern):
 * 1. Hero - First impression with GitHub stats
 * 2. Skills - Primary filter (recruiters filter by skills in first pass)
 * 3. Projects - Primary proof (demonstrates skills in action)
 * 4. About - Brief context (after interest is sparked)
 * 5. Experience - Internships only (not academic projects)
 * 6. Achievements - Top certifications (credibility boosters)
 * 7. Contact - Conversion point (after proven)
 * 
 * Sections Removed:
 * - Resume (standalone) - Redundant with Hero download button
 * - Resume Highlights - Duplicates Skills section
 */

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* 1. HERO - First impression, 6-second scan */}
        <Hero />
        
        {/* 2. SKILLS - Primary filter, immediate visibility */}
        <Skills />
        
        {/* 3. PROJECTS - Primary proof of skills */}
        <Projects />
        
        {/* 4. ABOUT - Brief context after proven interest */}
        <About />
        
        {/* 5. EXPERIENCE - Internships only */}
        <Experience />
        
        {/* 6. ACHIEVEMENTS - Top certifications */}
        <Achievements />
        
        {/* 7. CONTACT - Conversion after proof */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
