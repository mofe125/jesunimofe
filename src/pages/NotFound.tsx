
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
      <div className="text-center max-w-lg">
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary mb-6">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-flex items-center btn-primary">
          <ArrowLeft size={16} className="mr-2" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
