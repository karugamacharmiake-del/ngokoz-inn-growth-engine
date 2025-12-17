import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockReviews } from '@/data/mockData';

const ReviewsPreview = () => {
  const displayReviews = mockReviews.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from our happy customers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {displayReviews.map((review, index) => (
            <div
              key={review.id}
              className="rounded-3xl bg-card border border-border hover:shadow-medium transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Review Image */}
              {review.image && (
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={review.image}
                    alt={`Review by ${review.name}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-primary fill-primary' : 'text-muted'}`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-foreground mb-4 font-medium">
                  "{review.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center text-primary-foreground font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/reviews">
            <Button variant="outline" size="lg">
              See All Reviews <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/review/submit">
            <Button variant="hero" size="lg">
              <Star className="w-4 h-4" /> Leave Your Review
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPreview;
