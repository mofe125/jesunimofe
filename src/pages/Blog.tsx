
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import BlogPost from "../components/BlogPost";
import { subscribeToNewsletter } from "../utils/mailchimp";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const { toast } = useToast();

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  // Blog Posts with requested images and order
  const blogPosts = [
    {
      id: 1,
      title: "Hidden in Plain Sight",
      excerpt:
        "An intimate portrait exploring the lives of those often overlooked in our communities. A visual narrative on resilience, wisdom, and the stories etched in weathered faces.",
      image: "/lovable-uploads/9c784cdd-a5c5-4965-9351-8f52ba61d18e.png", // New image
      date: "May 3, 2025",
      author: "Jesunimofe Henry-Adelegan",
      category: "Stories",
      url: "https://medium.com/@thecreativelawyer/hidden-in-plain-sight"
    },
    {
      id: 2,
      title: "This Is to the Forgotten",
      excerpt:
        "A moving narrative exploring the overlooked and unheard whose stories have shaped our communities. Celebrating memory, resilience, and the power of being seen.",
      image: "/lovable-uploads/b4cccbab-f0c6-4d66-9490-d68a0864f2c4.png", // man on green
      date: "March 18, 2025",
      author: "Jesunimofe Henry-Adelegan",
      category: "Stories",
      url: "https://medium.com/@thecreativelawyer/this-is-to-the-forgotten-7700cd8c7af2"
    },
    {
      id: 3,
      title: "Mirror Mirror, I Am the Prettiest",
      excerpt:
        "A reflection on identity, perceptions of beauty, and self-worth in our modern world.",
      image: "/lovable-uploads/b5f10b07-d3f9-4d4a-83b9-760b2c88b538.png", // girl in front of mirror
      date: "March 8, 2025",
      author: "Jesunimofe Henry-Adelegan",
      category: "Stories",
      url: "https://medium.com/@thecreativelawyer/mirror-mirror-i-am-the-prettiest-ef7a077fb9fb"
    },
    {
      id: 4,
      title: "The Killer Culture & Culture Revivers",
      excerpt:
        "An in-depth look at how destructive cultural practices are challenged and revived by new generations.",
      image: "/lovable-uploads/20451b51-e799-4e00-a67f-08ba98ebbcef.png", // man on African cap
      date: "February 27, 2025",
      author: "Jesunimofe Henry-Adelegan",
      category: "Stories",
      url: "https://medium.com/@thecreativelawyer/the-killer-culture-and-culture-revivers-by-henry-adelegan-jesunimofe-71a859ebbcf2"
    }
  ];

  // Only Stories category needed
  const categories = [
    { name: "Stories", count: blogPosts.length }
  ];

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    try {
      await subscribeToNewsletter(email);
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout>
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Stories: In Pictures and Words
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {blogPosts.map((post) => (
                  <BlogPost key={post.id} post={post} />
                ))}
              </div>
              {/* Reach out section */}
              <div className="mt-16 p-8 bg-primary rounded-lg text-white text-center shadow-lg animate-on-load opacity-0">
                <h2 className="text-2xl font-heading font-semibold mb-4">Reach Out for Stories & Collaborations</h2>
                <p className="mb-4 text-white/90 max-w-2xl mx-auto">
                  Do you have a powerful story to share or a collaboration in mind? Let’s build something impactful together. Reach out via the contact page or at{" "}
                  <a 
                    href="mailto:jhenryadelegan@gmail.com" 
                    className="underline text-white hover:text-white/80 transition-colors"
                  >
                    jhenryadelegan@gmail.com
                  </a>.
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded hover:bg-white/90 transition-colors mt-2"
                >
                  Contact Page
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-10 animate-on-load opacity-0">
                <div className="bg-muted rounded-lg p-6 flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/437388d5-7d00-45db-b0b5-d426eea67987.png"
                    alt="Jesunimofe Henry-Adelegan" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h4 className="font-heading text-lg mb-2">Jesunimofe Henry-Adelegan</h4>
                  <p className="text-muted-foreground text-center mb-4 text-sm">
                    Documentary photographer and storyteller. 
                  </p>
                  <Link to="/about" className="text-primary hover:text-primary/80 transition-colors text-sm">
                    Read more
                  </Link>
                </div>

                <div>
                  <h3 className="font-heading text-xl mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link 
                          to={`/blog/category/${category.name.toLowerCase()}`}
                          className="flex justify-between items-center py-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="bg-muted rounded-full w-6 h-6 flex items-center justify-center text-xs">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-earthy text-white rounded-lg p-6">
                  <h3 className="font-heading text-xl mb-4">Subscribe to Newsletter</h3>
                  <p className="mb-4">
                    Get updates on stories, tips, and exhibitions.
                  </p>
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded-md bg-white/20 placeholder:text-white/70 border-0 focus:ring-2 focus:ring-white/30"
                      required
                    />
                    <button type="submit" className="w-full bg-white text-earthy font-medium px-4 py-2 rounded-md hover:bg-white/90 transition-colors">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
