import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const FloatingWalkthroughButton = () => {
  return (
    <Link
      to="/walkthrough"
      className="fixed bottom-6 right-6 z-50 group hidden md:block"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />

        {/* Button */}
        <div className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <Play className="w-5 h-5 fill-current" />
          <span>See How It Works</span>
        </div>
      </div>
    </Link>
  );
};

export default FloatingWalkthroughButton;
