
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";

const Blog = () => {
  // Fade-in animation on page load
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Untold Stories of Rural African Innovation",
      excerpt: "Exploring how rural communities are developing innovative solutions to everyday challenges with limited resources.",
      image: "/lovable-uploads/437388d5-7d00-45db-b0b5-d426eea67987.png",
      date: "April 15, 2025",
      author: "African Storyteller",
      category: "Innovation"
    },
    {
      id: 2,
      title: "Preserving Cultural Heritage Through Photography",
      excerpt: "How documentary photography plays a crucial role in preserving and celebrating traditional practices at risk of being forgotten.",
      image: "/lovable-uploads/101310d0-998b-4a55-bb3e-789a4d26f21a.png",
      date: "April 10, 2025",
      author: "African Storyteller",
      category: "Cultural Heritage"
    },
    {
      id: 3,
      title: "Women Leaders Transforming Communities",
      excerpt: "Profiles of extraordinary women creating positive change in their communities through grassroots initiatives.",
      image: "/lovable-uploads/a1e7295f-0c89-4f28-b800-1763e26e7bc4.png",
      date: "April 5, 2025",
      author: "African Storyteller",
      category: "Portraits"
    },
    {
      id: 4,
      title: "The Art of Visual Storytelling in Africa",
      excerpt: "Techniques and approaches to capturing authentic stories that challenge stereotypes and celebrate African resilience.",
      image: "/lovable-uploads/437388d5-7d00-45db-b0b5-d426eea67987.png",
      date: "March 28, 2025",
      author: "African Storyteller",
      category: "Photography"
    },
    {
      id: 5,
      title: "Documenting Climate Resilience Across the Continent",
      excerpt: "How communities are adapting to climate challenges with ingenuity and determination.",
      image: "/lovable-uploads/101310d0-998b-4a55-bb3e-789a4d26f21a.png",
      date: "March 20, 2025",
      author: "African Storyteller",
      category: "Environment"
    },
  ];

  // Categories for sidebar
  const categories = [
    { name: "Cultural Heritage", count: 8 },
    { name: "Portraits", count: 12 },
    { name: "Innovation", count: 5 },
    { name: "Photography", count: 9 },
    { name: "Environment", count: 6 },
  ];

  return (
    <PageLayout>
      {/* Blog Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              African Stories
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Narratives that celebrate resilience, challenge stereotypes, and showcase the authentic African experience.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Blog Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {blogPosts.map((post) => (
                  <article key={post.id} className="border-b border-border pb-12 animate-on-load opacity-0">
                    <div className="mb-6 overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-3">
                        <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                      >
                        Read full story
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-10 animate-on-load opacity-0">
                {/* About Author Widget */}
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-heading text-xl mb-4">About the Author</h3>
                  <div className="flex flex-col items-center">
                    <img 
                      src="/lovable-uploads/437388d5-7d00-45db-b0b5-d426eea67987.png"
                      alt="Author" 
                      className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h4 className="font-heading text-lg mb-2">African Storyteller</h4>
                    <p className="text-muted-foreground text-center mb-4">
                      Documentary photographer and writer focused on authentic African narratives.
                    </p>
                    <Link to="/about" className="text-primary hover:text-primary/80 transition-colors">
                      Read more about me
                    </Link>
                  </div>
                </div>

                {/* Categories Widget */}
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

                {/* Newsletter Widget */}
                <div className="bg-earthy text-white rounded-lg p-6">
                  <h3 className="font-heading text-xl mb-4">Subscribe to Newsletter</h3>
                  <p className="mb-4">
                    Get updates on new stories, photography tips, and upcoming exhibitions.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded-md bg-white/20 placeholder:text-white/70 border-0 focus:ring-2 focus:ring-white/30"
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
