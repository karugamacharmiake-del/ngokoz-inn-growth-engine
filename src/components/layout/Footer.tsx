import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { useBrand } from '@/context/BrandContext';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const { config } = useBrand();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center">
                <span className="text-xl">🍗</span>
              </div>
              <span className="font-display font-extrabold text-xl">{config.name}</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm mb-4">
              {config.tagline}
            </p>
            <p className="text-sm text-secondary-foreground/60">
              Rongai's favorite drive-in dining spot. Hot food, fast service, great vibes!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</Link>
              <Link to="/menu" className="text-secondary-foreground/80 hover:text-primary transition-colors">Menu</Link>
              <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</Link>
              <Link to="/reviews" className="text-secondary-foreground/80 hover:text-primary transition-colors">Reviews</Link>
              <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Visit Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">{config.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`tel:${config.phone}`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {config.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">{config.hours}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href={`https://tiktok.com/${config.tiktok}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <TikTokIcon />
              </a>
              <a 
                href={`https://instagram.com/${config.instagram}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://facebook.com/${config.facebook}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a 
                href={`https://wa.me/${config.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="/walkthrough" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              How It Works
            </Link>
            <span className="text-secondary-foreground/30">|</span>
            <Link to="/review/submit" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              Leave a Review
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
