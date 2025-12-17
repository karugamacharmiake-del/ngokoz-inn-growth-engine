import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useBrand } from '@/context/BrandContext';
import { Heart, MapPin, Users, Flame, Car, Award } from 'lucide-react';

const About = () => {
  const { config } = useBrand();

  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every meal is prepared with care and passion. We treat our customers like family.',
    },
    {
      icon: Flame,
      title: 'Hot & Fresh',
      description: 'We never compromise on quality. Your food is always made fresh to order.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: "We're not just a business – we're part of the Rongai community.",
    },
    {
      icon: Car,
      title: 'Drive-In Experience',
      description: 'Bringing the classic drive-in dining experience to Kenya.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Ongata Rongai, Kenya</span>
            </div>
            
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              About <span className="text-gradient">{config.name}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're Rongai's favorite drive-in dining spot – serving up hot, spicy, and 
              absolutely delicious food to our community. What started as a dream is now 
              a thriving destination for food lovers across Nairobi.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-8xl mb-4 block animate-float">🍗</span>
                    <p className="text-2xl font-bold text-foreground">{config.name}</p>
                    <p className="text-muted-foreground">{config.tagline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-6">
                Our Story 📖
              </h2>
              
              {/* Placeholder for actual story */}
              <div className="space-y-4 text-muted-foreground">
                <p className="p-4 rounded-2xl bg-muted/50 border-l-4 border-primary italic">
                  <strong className="text-foreground">Coming Soon:</strong> Our full story will be 
                  shared here – from humble beginnings to becoming Rongai's go-to food spot!
                </p>
                
                <p>
                  What we can tell you is this: {config.name} was born from a simple belief – 
                  that everyone deserves access to delicious, hot food served with a smile.
                </p>
                
                <p>
                  Our drive-in concept brings convenience and quality together. No need to leave 
                  your car – we bring the feast to you! From spicy chicken wings to loaded 
                  shawarmas and mouth-watering burgers, every item on our menu is crafted to 
                  make you come back for more.
                </p>
                
                <p className="font-semibold text-foreground">
                  We're not just serving food – we're building a community. 🤝
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than just food – these are the values that drive everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="p-6 rounded-3xl bg-card border border-border text-center hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Here to Stay */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-secondary-foreground mb-6">
              We're Here to <span className="text-primary">Stay</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              {config.name} isn't a pop-up or a temporary thing. We've planted our roots 
              in Rongai and we're committed to serving this community for years to come. 
              This is our home, and you're always welcome!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button variant="hero" size="lg">Explore Our Menu</Button>
              </Link>
              <Link to="/contact">
                <Button variant="dark" size="lg">Visit Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
