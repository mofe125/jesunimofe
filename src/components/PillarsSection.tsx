
import { Briefcase, Gavel, Palette, Landmark, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PillarsSection = () => {
  const pillars = [
    {
      icon: <Briefcase className="h-12 w-12 mb-4 text-primary" />,
      title: "Leadership",
      description: "Guiding and empowering change through visionary direction and mentorship"
    },
    {
      icon: <Gavel className="h-12 w-12 mb-4 text-primary" />,
      title: "Law",
      description: "Advocating for justice and equality through legal expertise"
    },
    {
      icon: <Palette className="h-12 w-12 mb-4 text-primary" />,
      title: "Arts",
      description: "Capturing and creating compelling visual narratives"
    },
    {
      icon: <Landmark className="h-12 w-12 mb-4 text-primary" />,
      title: "Culture",
      description: "Preserving and celebrating African heritage and traditions"
    },
    {
      icon: <Users className="h-12 w-12 mb-4 text-primary" />,
      title: "Humanitarian Service",
      description: "Making a positive impact through charitable initiatives and community support"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-load opacity-0">
          <h2 className="section-title">The Five Pillars of Impact</h2>
          <p className="section-subtitle">
            My work is founded on these interconnected pillars that drive positive change in society
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-load opacity-0">
          {pillars.map((pillar, index) => (
            <Card key={index} className={`${index === pillars.length - 1 ? 'lg:col-start-2' : ''} hover:shadow-lg transition-shadow duration-300`}>
              <CardContent className="pt-6 text-center">
                {pillar.icon}
                <h3 className="text-2xl font-heading font-semibold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
