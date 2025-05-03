
import { useParams } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Mock blog post data - in a real app, this would come from an API or database
const blogPostsData = [
  {
    slug: "hidden-in-plain-sight",
    title: "Hidden in Plain Sight",
    content: "This is the full content of the Hidden in Plain Sight blog post. In a real application, this would be formatted with rich text and possibly include multiple paragraphs, images, and other media elements.",
    image: "/lovable-uploads/9c784cdd-a5c5-4965-9351-8f52ba61d18e.png",
    date: "May 3, 2025",
    author: "Jesunimofe Henry-Adelegan",
    category: "Stories"
  },
  {
    slug: "mirror-mirror-i-am-the-prettiest",
    title: "Mirror Mirror, I Am the Prettiest",
    content: "This is the full content of the Mirror Mirror blog post. In a real application, this would be formatted with rich text and possibly include multiple paragraphs, images, and other media elements.",
    image: "/lovable-uploads/b5f10b07-d3f9-4d4a-83b9-760b2c88b538.png",
    date: "March 8, 2025",
    author: "Jesunimofe Henry-Adelegan",
    category: "Stories"
  },
  {
    slug: "the-killer-culture-and-culture-revivers",
    title: "The Killer Culture & Culture Revivers",
    content: "This is the full content of the Killer Culture blog post. In a real application, this would be formatted with rich text and possibly include multiple paragraphs, images, and other media elements.",
    image: "/lovable-uploads/20451b51-e799-4e00-a67f-08ba98ebbcef.png",
    date: "February 27, 2025",
    author: "Jesunimofe Henry-Adelegan",
    category: "Stories"
  }
];

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPostsData.find(post => post.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <div className="container-custom py-20">
          <h1 className="text-3xl font-bold">Blog post not found</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                {post.author}
              </div>
              <span className="bg-primary/20 text-white px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p>{post.content}</p>
                {/* In a real app, you would render rich text content here */}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogDetail;
