import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { mockReviews } from '@/data/mockData';
import { Star, Plus } from 'lucide-react';

const Reviews = () => {
  const averageRating = (mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length).toFixed(1);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Customer <span className="text-gradient">Reviews</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            See what our customers are saying about us!
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="p-4 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 justify-center mb-1">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <span className="font-display font-black text-3xl text-foreground">{averageRating}</span>
              </div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-border">
              <div className="font-display font-black text-3xl text-foreground mb-1">
                {mockReviews.length}+
              </div>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </div>

          <Link to="/review/submit">
            <Button variant="hero" size="lg">
              <Plus className="w-5 h-5" /> Leave Your Review
            </Button>
          </Link>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {mockReviews.map((review, index) => (
              <div 
                key={review.id}
                className="p-6 rounded-3xl bg-card border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">{review.name}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-primary fill-primary' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                    
                    {/* Comment */}
                    <p className="text-foreground">"{review.comment}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
              Visited Us? We'd Love Your Feedback! 💬
            </h2>
            <p className="text-muted-foreground mb-6">
              Your review helps us improve and helps others discover great food!
            </p>
            <Link to="/review/submit">
              <Button variant="hero" size="lg">
                <Star className="w-5 h-5" /> Leave a Review
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
