import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { mockReviews, Review } from '@/data/mockData';
import { Star, Plus, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
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

      {/* Reviews Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockReviews.map((review, index) => (
              <div 
                key={review.id}
                onClick={() => setSelectedReview(review)}
                className="group p-5 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image if exists */}
                {review.image && (
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={review.image} 
                      alt={`Review by ${review.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">{review.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(review.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    
                    {/* Stars */}
                    <div className="flex gap-0.5 my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-primary fill-primary' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                    
                    {/* Comment Preview */}
                    <p className="text-foreground text-sm line-clamp-3">"{review.comment}"</p>
                  </div>
                </div>
                
                <p className="text-xs text-primary mt-3 font-medium group-hover:underline">
                  Click to read more →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Modal */}
      <Dialog open={!!selectedReview} onOpenChange={() => setSelectedReview(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="sr-only">Review Details</DialogTitle>
          </DialogHeader>
          {selectedReview && (
            <div className="space-y-4">
              {/* Image */}
              {selectedReview.image && (
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src={selectedReview.image} 
                    alt={`Review by ${selectedReview.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full brand-gradient flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {selectedReview.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {selectedReview.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(selectedReview.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-6 h-6 ${i < selectedReview.rating ? 'text-primary fill-primary' : 'text-muted'}`}
                  />
                ))}
              </div>
              
              {/* Comment */}
              <p className="text-foreground text-lg leading-relaxed">
                "{selectedReview.comment}"
              </p>
              
              {/* Close */}
              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={() => setSelectedReview(null)}
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

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
