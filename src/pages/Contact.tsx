import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useBrand } from '@/context/BrandContext';
import { MapPin, Phone, Clock, Navigation, MessageCircle, Instagram, Facebook } from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Contact = () => {
  const { config } = useBrand();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Find <span className="text-gradient">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the best drive-in dining in Rongai?
            Here's how to reach us!
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Location */}
              <div className="p-6 rounded-3xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground mb-3">{config.location}</p>
                    <a
                      href="https://www.google.com/maps/place/Ngokoz+Eatery/@-1.3905251,36.7668344,17z/data=!3m1!4b1!4m6!3m5!1s0x182f05005b5dd3ff:0xb59a1df2b18b65de!8m2!3d-1.3905251!4d36.7694093!16s%2Fg%2F11yg9s3ct3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Navigation className="w-4 h-4" /> Get Directions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-3xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">{config.hours}</p>
                    <p className="text-sm text-primary font-semibold mt-2">Open Now! 🟢</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-3xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-600/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-3">{config.phone}</p>
                    <div className="flex flex-wrap gap-2">
                      <a href={`tel:${config.phone}`}>
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4" /> Call
                        </Button>
                      </a>
                      <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4" /> WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="p-6 rounded-3xl bg-card border border-border">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href={`https://tiktok.com/${config.tiktok}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <TikTokIcon />
                  </a>
                  <a
                    href={`https://instagram.com/${config.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href={`https://facebook.com/${config.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl bg-muted overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-20 h-20 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">{config.name}</h3>
                    <p className="text-muted-foreground mb-6">{config.location}</p>
                    <a
                      href="https://www.google.com/maps/place/Ngokoz+Eatery/@-1.3905251,36.7668344,17z/data=!3m1!4b1!4m6!3m5!1s0x182f05005b5dd3ff:0xb59a1df2b18b65de!8m2!3d-1.3905251!4d36.7694093!16s%2Fg%2F11yg9s3ct3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="hero" size="lg">
                        <Navigation className="w-5 h-5" /> Open in Google Maps
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-black text-3xl md:text-4xl text-secondary-foreground mb-4">
            Drive In, Dig In! 🚗🍗
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-6">
            No need to leave your car – we bring the feast to you!
            Experience the convenience of drive-in dining at {config.name}.
          </p>
          <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us Now
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
