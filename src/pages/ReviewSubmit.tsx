import { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBrand } from '@/context/BrandContext';

const ReviewSubmit = () => {
  const { config } = useBrand();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: Just show success
    setSubmitted(true);
  };

  if (submitted) {
    const isPositive = rating >= 4;
    
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-display font-black text-3xl text-foreground mb-4">
            Thank You! 🎉
          </h1>
          <p className="text-muted-foreground mb-6">
            {isPositive 
              ? "We're so glad you enjoyed your experience! We'll send you a reminder to share your review on Google Maps."
              : "Thank you for your feedback. Our team will review it and work to make things right."
            }
          </p>
          <div className="p-4 rounded-2xl bg-card border border-border mb-6">
            <p className="text-sm text-muted-foreground">Your Rating</p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-6 h-6 ${i < rating ? 'text-primary fill-primary' : 'text-muted'}`}
                />
              ))}
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => {
              setSubmitted(false);
              setRating(0);
              setFeedback('');
              setContact('');
            }}
          >
            Submit Another Review
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🍗</span>
          </div>
          <h1 className="font-display font-black text-2xl md:text-3xl text-foreground mb-2">
            How Was Your Visit?
          </h1>
          <p className="text-muted-foreground">
            Share your experience at {config.name}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Star Rating */}
          <div className="p-6 rounded-3xl bg-card border border-border">
            <label className="block text-center font-semibold text-foreground mb-4">
              Tap to Rate
            </label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="p-1 transition-transform hover:scale-110 active:scale-95"
                >
                  <Star 
                    className={`w-10 h-10 transition-colors ${
                      star <= (hoveredRating || rating) 
                        ? 'text-primary fill-primary' 
                        : 'text-muted'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-sm text-muted-foreground mt-3">
                {rating >= 4 ? '😊 We love hearing that!' : rating >= 3 ? '🙂 Thanks for the feedback!' : '😔 Sorry to hear that. Tell us more below.'}
              </p>
            )}
          </div>

          {/* Feedback */}
          <div className="p-6 rounded-3xl bg-card border border-border">
            <label className="block font-semibold text-foreground mb-2">
              Tell Us More (Optional)
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="What did you enjoy? Any suggestions?"
              className="w-full h-24 p-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-colors"
            />
          </div>

          {/* Contact */}
          <div className="p-6 rounded-3xl bg-card border border-border">
            <label className="block font-semibold text-foreground mb-2">
              Email or Phone (Optional)
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="So we can follow up if needed"
              className="w-full p-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />
            <p className="text-xs text-muted-foreground mt-2">
              We'll never share your info without permission.
            </p>
          </div>

          {/* Submit */}
          <Button 
            type="submit" 
            variant="hero" 
            size="xl" 
            className="w-full"
            disabled={rating === 0}
          >
            <Send className="w-5 h-5" /> Submit Review
          </Button>
        </form>

        {/* Footer Note */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          This helps us improve and serve you better! ❤️
        </p>
      </div>
    </div>
  );
};

export default ReviewSubmit;
