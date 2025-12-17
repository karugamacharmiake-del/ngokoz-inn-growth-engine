import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBrand } from '@/context/BrandContext';

const HeroSection = () => {
  const { config } = useBrand();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 md:pt-28">
      {/* Decorative Food Emojis */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl animate-float">🍗</div>
        <div className="absolute top-40 right-20 text-6xl animate-float" style={{ animationDelay: '0.5s' }}>🌯</div>
        <div className="absolute bottom-40 left-1/4 text-7xl animate-float" style={{ animationDelay: '1s' }}>🍔</div>
        <div className="absolute bottom-20 right-1/4 text-5xl animate-float" style={{ animationDelay: '1.5s' }}>🔥</div>
      </div>

      <div className="container py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 px-4 lg:px-0">
            {/* Main Heading */}
            <h1 className="font-display font-black leading-tight">
              Cravings On Point? 🔥<br />
              We Got You at <span className="text-gradient">{config.name}</span>
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              No cap, the most fire chicken, loaded shawarmas & juicy burgers in Rongai.
              Pull up, vibe with us, and let your taste buds go wild! 🚗💨
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/menu">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 rounded-full shadow-lg hover:shadow-glow transition-all">
                  🍗 Peep the Menu
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold px-8 rounded-full">
                  <MapPin className="w-5 h-5 mr-2" /> Locate Us
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">4.9 Rating</span>
              </div>
              <div className="w-px h-6 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">📱</span>
                <span className="text-sm text-muted-foreground font-medium">50K+ TikTok</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex items-center justify-center px-4 lg:px-0">
            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg animate-float">
              {/* Large Food Illustration */}
              <div className="text-[200px] sm:text-[280px] lg:text-[380px] leading-none text-center lg:text-left">
                🍔
              </div>

              {/* Floating Badge */}
              <div className="absolute top-5 sm:top-10 -left-2 sm:-left-4 bg-accent text-white px-3 py-2 sm:px-4 rounded-full shadow-strong font-bold text-xs sm:text-sm animate-bounce-soft">
                <span className="flex items-center gap-1">
                  🔥 Hot & Spicy
                </span>
              </div>

              {/* Floating Price Badge */}
              <div className="absolute bottom-16 sm:bottom-20 -right-2 sm:-right-4 bg-primary text-primary-foreground px-4 py-2 sm:px-5 sm:py-3 rounded-full shadow-strong font-bold animate-bounce-soft" style={{ animationDelay: '0.3s' }}>
                <div className="text-[10px] sm:text-xs">From</div>
                <div className="text-lg sm:text-xl">KES 350</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
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
