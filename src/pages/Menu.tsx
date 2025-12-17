import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { menuItems, MenuItem } from '@/data/mockData';
import { Flame, Star, Car, Phone } from 'lucide-react';
import { useBrand } from '@/context/BrandContext';

type Category = 'all' | MenuItem['category'];

const categories: { value: Category; label: string; emoji: string }[] = [
  { value: 'all', label: 'All Items', emoji: '🍽️' },
  { value: 'chicken', label: 'Chicken', emoji: '🍗' },
  { value: 'shawarma', label: 'Shawarma', emoji: '🌯' },
  { value: 'burgers', label: 'Burgers', emoji: '🍔' },
  { value: 'platters', label: 'Platters', emoji: '🍱' },
  { value: 'drinks', label: 'Drinks', emoji: '🥤' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const { config } = useBrand();

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Our <span className="text-gradient">Menu</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            From crispy chicken to loaded shawarmas and juicy burgers – 
            every bite is an experience!
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
              <Car className="w-4 h-4" /> Drive-In Available
            </span>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-24 md:top-28 z-40 bg-card/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory -mx-4 px-4 md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex-shrink-0 snap-center px-4 py-2 rounded-xl font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.value
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <span className="mr-1">{cat.emoji}</span> {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Link 
                key={item.id}
                to={`/menu/${item.id}`}
                className="group p-5 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image Placeholder */}
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                    {item.category === 'chicken' && '🍗'}
                    {item.category === 'shawarma' && '🌯'}
                    {item.category === 'burgers' && '🍔'}
                    {item.category === 'platters' && '🍱'}
                    {item.category === 'drinks' && '🥤'}
                  </div>
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex gap-2">
                    {item.isPopular && (
                      <span className="px-2 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" /> Popular
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="px-2 py-1 rounded-lg bg-accent text-accent-foreground text-xs font-bold flex items-center gap-1">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-xl text-primary">
                    KSh {item.price.toLocaleString()}
                  </span>
                  <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
              Ready to Order? 🚗
            </h2>
            <p className="text-muted-foreground mb-6">
              Drive in to {config.name} and enjoy the best food in Rongai. 
              We're waiting to serve you!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${config.phone}`}>
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5" /> Call to Reserve
                </Button>
              </a>
              <a href={`https://www.google.com/maps/search/${encodeURIComponent(config.location)}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">Visit Us Today</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
