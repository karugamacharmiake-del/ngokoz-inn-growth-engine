import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Fun 404 Display */}
        <div className="mb-8">
          <span className="text-8xl animate-bounce-soft inline-block">🍗</span>
          <h1 className="font-display font-black text-6xl md:text-8xl text-foreground mt-4">
            4<span className="text-primary">0</span>4
          </h1>
        </div>

        <h2 className="font-display font-bold text-2xl text-foreground mb-4">
          Oops! This Page Got Eaten
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Looks like someone couldn't resist! The page you're looking for 
          doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button variant="hero" size="lg">
              <Home className="w-5 h-5" /> Go Home
            </Button>
          </Link>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5" /> Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
