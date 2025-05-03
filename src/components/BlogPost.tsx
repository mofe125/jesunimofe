
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

// Update the type definition for the post prop
interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    category: string;
    slug: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="border-b border-border pb-12 animate-on-load opacity-0">
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
          <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-muted-foreground mb-4">
          {post.excerpt}
        </p>
        <Link 
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Read full story
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
