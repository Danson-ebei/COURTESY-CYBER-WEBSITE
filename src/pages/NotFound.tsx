import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home size={20} />
                Return to Home
              </Link>
            </Button>
            
            <Button asChild variant="outline">
              <button onClick={() => window.history.back()} className="flex items-center gap-2">
                <ArrowLeft size={20} />
                Go Back
              </button>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
