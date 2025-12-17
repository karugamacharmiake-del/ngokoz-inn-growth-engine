import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/data/mockData';
import { Flame, Star, Clock, ArrowLeft, Phone, Car } from 'lucide-react';
import { useBrand } from '@/context/BrandContext';

const MenuItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { config } = useBrand();
  
  const item = menuItems.find(m => m.id === id);

  if (!item) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display font-bold text-2xl mb-4">Item Not Found</h1>
          <Link to="/menu">
            <Button variant="outline">Back to Menu</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const getCategoryEmoji = (category: string) => {
    const emojis: Record<string, string> = {
      chicken: '🍗',
      shawarma: '🌯',
      burgers: '🍔',
      platters: '🍱',
      drinks: '🥤',
    };
    return emojis[category] || '🍽️';
  };

  const relatedItems = menuItems
    .filter(m => m.category === item.category && m.id !== item.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Menu
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
              <span className="text-9xl">{getCategoryEmoji(item.category)}</span>
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {item.isPopular && (
                  <span className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" /> Popular
                  </span>
                )}
                {item.isSpicy && (
                  <span className="px-3 py-1.5 rounded-xl bg-accent text-accent-foreground text-sm font-bold flex items-center gap-1">
                    <Flame className="w-4 h-4" /> Spicy
                  </span>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-3 capitalize">
                  {item.category}
                </span>
                <h1 className="font-display font-black text-3xl md:text-4xl text-foreground mb-3">
                  {item.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Price & Time */}
              <div className="flex flex-wrap gap-4">
                <div className="p-4 rounded-2xl bg-card border border-border flex-1 min-w-[140px]">
                  <p className="text-sm text-muted-foreground mb-1">Price</p>
                  <p className="font-display font-black text-2xl text-primary">
                    KSh {item.price.toLocaleString()}
                  </p>
                </div>
                {item.prepTime && (
                  <div className="p-4 rounded-2xl bg-card border border-border flex-1 min-w-[140px]">
                    <p className="text-sm text-muted-foreground mb-1">Prep Time</p>
                    <p className="font-display font-bold text-xl text-foreground flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      {item.prepTime}
                    </p>
                  </div>
                )}
              </div>

              {/* Ingredients */}
              {item.ingredients && item.ingredients.length > 0 && (
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <p className="font-semibold text-foreground mb-3">What's Included</p>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ingredient, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-muted text-muted-foreground text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a href={`tel:${config.phone}`} className="block">
                  <Button variant="hero" size="xl" className="w-full">
                    <Phone className="w-5 h-5" />
                    Call to Reserve
                  </Button>
                </a>
                <a 
                  href={`https://wa.me/${config.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi! I'd like to order: ${item.name} (KSh ${item.price})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" size="lg" className="w-full">
                    Order via WhatsApp
                  </Button>
                </a>
              </div>

              {/* Drive-in note */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-primary/10 text-primary">
                <Car className="w-5 h-5" />
                <span className="font-medium text-sm">Drive-in dining available!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Items */}
      {relatedItems.length > 0 && (
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedItems.map((related) => (
                <Link 
                  key={related.id}
                  to={`/menu/${related.id}`}
                  className="group p-4 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-medium transition-all"
                >
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-3 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                    {getCategoryEmoji(related.category)}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{related.name}</h3>
                  <p className="font-display font-bold text-primary">KSh {related.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default MenuItemDetail;
