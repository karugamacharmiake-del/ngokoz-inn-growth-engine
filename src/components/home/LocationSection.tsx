import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBrand } from '@/context/BrandContext';

const LocationSection = () => {
  const { config } = useBrand();

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-video lg:aspect-square rounded-3xl bg-muted overflow-hidden relative">
              {/* Placeholder Map */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-2">Find Us in Rongai</p>
                  <p className="text-muted-foreground">{config.location}</p>
                  <a
                    href="https://www.google.com/maps/place/Ngokoz+Eatery/@-1.3905251,36.7668344,17z/data=!3m1!4b1!4m6!3m5!1s0x182f05005b5dd3ff:0xb59a1df2b18b65de!8m2!3d-1.3905251!4d36.7694093!16s%2Fg%2F11yg9s3ct3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline"
                  >
                    <Navigation className="w-4 h-4" /> Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Come <span className="text-gradient">Visit Us!</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're right in the heart of Rongai. Pull up, order from your car, and enjoy the
              best food in town. Easy to find, hard to leave!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">{config.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Opening Hours</h3>
                  <p className="text-muted-foreground">{config.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Call or WhatsApp</h3>
                  <p className="text-muted-foreground">{config.phone}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/place/Ngokoz+Eatery/@-1.3905251,36.7668344,17z/data=!3m1!4b1!4m6!3m5!1s0x182f05005b5dd3ff:0xb59a1df2b18b65de!8m2!3d-1.3905251!4d36.7694093!16s%2Fg%2F11yg9s3ct3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Navigation className="w-5 h-5" /> Get Directions
                </Button>
              </a>
              <a href={`tel:${config.phone}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
