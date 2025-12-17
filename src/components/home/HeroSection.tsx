import { Link } from 'react-router-dom';
import { MapPin, Star, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBrand } from '@/context/BrandContext';

const HeroSection = () => {
  const { config } = useBrand();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl animate-float">🍗</div>
        <div className="absolute top-40 right-20 text-6xl animate-float" style={{ animationDelay: '0.5s' }}>🌯</div>
        <div className="absolute bottom-40 left-1/4 text-7xl animate-float" style={{ animationDelay: '1s' }}>🍔</div>
        <div className="absolute bottom-20 right-1/4 text-5xl animate-float" style={{ animationDelay: '1.5s' }}>🔥</div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Car className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Drive-In Dining in Rongai</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 animate-slide-up">
            <span className="text-gradient">{config.name}</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground/80 mb-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {config.tagline}
          </p>
          
          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Rongai's favorite spot for crispy chicken, loaded shawarmas, and juicy burgers. 
            Pull up, order up, and dig in!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/menu">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                🍗 View Menu
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="dark" size="xl" className="w-full sm:w-auto">
                <MapPin className="w-5 h-5" /> Find Us
              </Button>
            </Link>
            <Link to="/review/submit">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                <Star className="w-5 h-5" /> Leave Review
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">4.9 Rating</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              <span className="text-muted-foreground">50K+ TikTok Followers</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚗</span>
              <span className="text-muted-foreground">Drive-In Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
