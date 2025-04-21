import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { useEffect } from "react";

const stories = [
  {
    id: 1,
    title: "This Is to the Forgotten",
    excerpt:
      "A moving narrative exploring the overlooked and unheard whose stories have shaped our communities. This story celebrates memory, resilience, and the power of being seen.",
    image: "/lovable-uploads/45e52f4d-7222-4835-ad5d-7b43eef160fb.png",
    url: "https://medium.com/@thecreativelawyer/this-is-to-the-forgotten-7700cd8c7af2"
  },
  {
    id: 2,
    title: "Mirror Mirror, I Am the Prettiest",
    excerpt:
      "A powerful reflection on identity, perceptions of beauty, and self-worth in our modern world. Jesunimofe brings a new voice to narratives of self-love and acceptance.",
    image: "/lovable-uploads/e093229a-bfa7-4f72-a750-22eebc4c5e4f.png",
    url: "https://medium.com/@thecreativelawyer/mirror-mirror-i-am-the-prettiest-ef7a077fb9fb"
  },
  {
    id: 3,
    title: "The Killer Culture & Culture Revivers",
    excerpt:
      "An in-depth look at how destructive cultural practices are challenged and revived by new generations led by Jesunimofe’s unique storytelling viewpoint.",
    image: "/lovable-uploads/ac0d8924-f6dc-4aec-b976-459b609dfb9a.png",
    url: "https://medium.com/@thecreativelawyer/the-killer-culture-and-culture-revivers-by-henry-adelegan-jesunimofe-71a859ebbcf2"
  }
];

const Index = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Jesunimofe: The Great Oak
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Jesunimofe is a dynamic and multifaceted individual who embodies the spirit of innovation, creativity, and social responsibility. She is a talented documentary photographer, writer and multimedia storyteller using her art to amplify marginalized voices and address pressing social issues.  Through her diverse endeavors,  such as her non-profit organisation that supports underprivileged children, Jesunimofe continues to inspire positive change and creativity, leaving a lasting impact on her community and beyond. She also promotes literacy for children with her organisation, Smart Kids Creative.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Section (with new tagline) */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-2">
              Documentary photographer and multimedia storyteller capturing authentic African narratives with dignity and emotion.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stories.map((story) => (
              <article key={story.id} className="border border-border rounded-lg overflow-hidden bg-muted shadow animate-on-load opacity-0 flex flex-col">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2 font-heading">{story.title}</h3>
                  <p className="mb-4 text-muted-foreground flex-1">{story.excerpt}</p>
                  <a
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Read full story
                  </a>
                </div>
              </article>
            ))}
          </div>
          {/* Call to Action for collaborations */}
          <div className="mt-16 flex flex-col items-center">
            <div className="bg-primary/10 rounded-lg px-6 py-8 max-w-lg w-full text-center">
              <h4 className="text-2xl font-heading font-semibold mb-4">Reach out for stories and collaborations</h4>
              <p className="text-muted-foreground mb-6">
                Interested in collaborating or sharing your story? Get in touch and let's create something meaningful together.
              </p>
              <Link to="/contact" className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/80 transition-colors">
                Contact Jesunimofe
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 animate-on-load opacity-0">
              Join the Community
            </h2>
            <p className="text-muted-foreground text-xl mb-8 animate-on-load opacity-0">
              Stay updated with the latest news, events, and opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary/80 transition-colors animate-on-load opacity-0"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
