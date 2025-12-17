import { Car, Clock, Users, Flame, Music, Heart } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: 'Drive-In Dining',
    description: 'Stay in your car and enjoy hot, fresh food delivered right to your window.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'No long waits. We serve fast without compromising on taste or quality.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Flame,
    title: 'Hot & Spicy',
    description: 'Our signature spice blend keeps Rongai coming back for more!',
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'Big portions, family deals, and a welcoming vibe for everyone.',
    color: 'text-green-600',
    bg: 'bg-green-600/10',
  },
  {
    icon: Music,
    title: 'Events & Vibes',
    description: 'Regular family fun days, live music, and community events.',
    color: 'text-purple-600',
    bg: 'bg-purple-600/10',
  },
  {
    icon: Heart,
    title: 'Community Love',
    description: "We're Rongai's own. Built here, serving here, staying here.",
    color: 'text-pink-600',
    bg: 'bg-pink-600/10',
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Why <span className="text-gradient">Ngokoz?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just food – it's an experience. Here's what makes us Rongai's favorite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-3xl bg-background border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
