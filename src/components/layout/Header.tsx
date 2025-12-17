import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBrand } from '@/context/BrandContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { config } = useBrand();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 text-xs md:text-sm gap-2">
            <div className="flex items-center gap-2 md:gap-4 flex-wrap">
              <a href="https://www.google.com/maps/place/Ngokoz+Eatery/@-1.3905251,36.7668344,17z/data=!3m1!4b1!4m6!3m5!1s0x182f05005b5dd3ff:0xb59a1df2b18b65de!8m2!3d-1.3905251!4d36.7694093!16s%2Fg%2F11yg9s3ct3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="hidden lg:inline">{config.location}</span>
                <span className="hidden sm:inline lg:hidden">Near Mbabathi Academy, Rongai</span>
                <span className="sm:hidden">Rongai</span>
              </a>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="hidden md:inline">Open Daily: 8AM - 11PM</span>
                <span className="md:hidden">8AM - 11PM</span>
              </span>
            </div>
            <a href={`tel:${config.phone}`} className="flex items-center gap-1 font-semibold hover:text-primary transition-colors">
              <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span>{config.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-primary shadow-md">
                <img
                  src="/logo.jpg"
                  alt={config.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-extrabold text-lg md:text-xl text-foreground">
                {config.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${isActive(link.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/review/submit">
                <Button variant="hero" size="sm">Leave Review</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-semibold transition-all ${isActive(link.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border my-2" />
            <Link to="/review/submit" onClick={() => setIsOpen(false)}>
              <Button variant="hero" className="w-full">Leave Review</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
