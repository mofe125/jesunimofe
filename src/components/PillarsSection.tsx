
import { Briefcase, Gavel, Palette, Landmark, Users, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PillarsSection = () => {
  const pillars = [
    {
      icon: <Briefcase className="h-10 w-10 mb-3 text-primary" />,
      title: "Leadership",
      description: "Guiding and empowering change through visionary direction and mentorship"
    },
    {
      icon: <Gavel className="h-10 w-10 mb-3 text-primary" />,
      title: "Law",
      description: "Advocating for justice and equality through legal expertise"
    },
    {
      icon: <Palette className="h-10 w-10 mb-3 text-primary" />,
      title: "Arts",
      description: "Capturing and creating compelling visual narratives"
    },
    {
      icon: <Landmark className="h-10 w-10 mb-3 text-primary" />,
      title: "Culture",
      description: "Preserving and celebrating African heritage and traditions"
    },
    {
      icon: <Users className="h-10 w-10 mb-3 text-primary" />,
      title: "Humanitarian Service",
      description: "Making a positive impact through charitable initiatives and community support"
    },
    {
      icon: <Newspaper className="h-10 w-10 mb-3 text-primary" />,
      title: "Journalism",
      description: "Sharing impactful stories through writing, presenting, and podcasting"
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8 animate-on-load opacity-0">
          <h2 className="section-title">The Six Pillars of Impact</h2>
          <p className="section-subtitle">
            My work is founded on these interconnected pillars that drive positive change in society
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-on-load opacity-0">
          {pillars.map((pillar, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-4 pb-4 text-center">
                {pillar.icon}
                <h3 className="text-xl font-heading font-semibold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
