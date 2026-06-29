import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mic, BookOpen, Users, Award, ArrowRight, Calendar } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import speakingVideo1 from "@/assets/speaking-1.mp4.asset.json";
import speakingVideo2 from "@/assets/speaking-2.mp4.asset.json";

const SpeakingEngagements = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  const topics = [
    {
      title: "Documentary Storytelling for Social Change",
      description: "Using visual narratives to amplify marginalized voices and address pressing social issues across Africa and beyond."
    },
    {
      title: "African Identity, Culture, and Representation",
      description: "Exploring how media, law, and the arts can challenge stereotypes and redefine global perceptions of Africa."
    },
    {
      title: "Law, Creativity, and Intellectual Property",
      description: "Empowering creatives and entrepreneurs to protect their work, understand their rights, and thrive in creative industries."
    },
    {
      title: "Youth Leadership and Philanthropy",
      description: "Sharing practical experiences from founding The Hand that Gives the Rose and leading Giving Tuesday youth initiatives."
    },
    {
      title: "Building Confidence and Body Positivity",
      description: "Inspiring conversations about self-worth, identity, and the importance of women owning their voices and bodies."
    }
  ];

  const engagements = [
    {
      type: "Conferences",
      description: "Keynotes and panel discussions on storytelling, culture, law, and social impact.",
      icon: <Mic className="h-10 w-10 mb-4 text-primary" />
    },
    {
      type: "Workshops",
      description: "Hands-on sessions in photography, writing, podcasting, and creative advocacy.",
      icon: <BookOpen className="h-10 w-10 mb-4 text-primary" />
    },
    {
      type: "Community Events",
      description: "Conversations at schools, NGOs, and grassroots gatherings focused on youth and women.",
      icon: <Users className="h-10 w-10 mb-4 text-primary" />
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-earthy to-earthy-light">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Speaking Engagements
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Inviting Jesunimofe to speak means bringing a unique blend of storytelling, legal insight, and lived experience to your audience.
            </p>
          </div>
        </div>
      </section>

      {/* About the Speaker */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-load opacity-0">
              <img
                src="/lovable-uploads/437388d5-7d00-45db-b0b5-d426eea67987.png"
                alt="Jesunimofe Henry-Adelegan"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="animate-on-load opacity-0">
              <h2 className="section-title">Why Book Jesunimofe?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Jesunimofe Henry-Adelegan is a documentary photographer, writer, former radio presenter, podcaster, and intellectual property lawyer with a heart for philanthropy. She brings authenticity, energy, and depth to every stage she steps on.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether speaking on storytelling, African identity, law and creativity, youth leadership, or social impact, she connects with audiences through personal stories and actionable insights that inspire change.
              </p>
              <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-primary" />
                <span className="text-lg font-medium">Available for keynotes, panels, workshops, and moderated conversations.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Engagements */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-load opacity-0">
            <h2 className="section-title">Types of Engagements</h2>
            <p className="section-subtitle">
              Jesunimofe speaks across diverse formats and audiences, both virtually and in person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagements.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-sm transition-all hover:shadow-md text-center animate-on-load opacity-0"
              >
                {item.icon}
                <h3 className="font-heading text-2xl mb-3">{item.type}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-load opacity-0">
            <h2 className="section-title">Popular Topics</h2>
            <p className="section-subtitle">
              Topics can be tailored to the needs of your audience, event theme, and time format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg p-6 shadow-sm animate-on-load opacity-0"
              >
                <h3 className="font-heading text-xl mb-2">{topic.title}</h3>
                <p className="text-muted-foreground">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Highlights Videos */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-load opacity-0">
            <h2 className="section-title">Speaking Highlights</h2>
            <p className="section-subtitle">
              A glimpse of Jesunimofe in action on stage and behind the mic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-load opacity-0 rounded-lg overflow-hidden shadow-lg bg-card">
              <video
                src={speakingVideo1.url}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto"
              />
            </div>
            <div className="animate-on-load opacity-0 rounded-lg overflow-hidden shadow-lg bg-card">
              <video
                src={speakingVideo2.url}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <div className="bg-card rounded-xl p-8 md:p-12 text-center animate-on-load opacity-0">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Book Jesunimofe for Your Next Event
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Interested in having Jesunimofe speak at your conference, school, organization, or community event? Reach out to discuss availability, topics, and tailored sessions.
            </p>
            <Link to="/contact" className="btn-primary">
              Request a Booking
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SpeakingEngagements;
