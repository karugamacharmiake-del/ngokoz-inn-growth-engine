import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { walkthroughSteps } from '@/data/mockData';
import { useBrand } from '@/context/BrandContext';

const Walkthrough = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { config } = useBrand();
  const step = walkthroughSteps[currentStep];

  const nextStep = () => {
    if (currentStep < walkthroughSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isLast = currentStep === walkthroughSteps.length - 1;
  const isFirst = currentStep === 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background flex flex-col">
      {/* Header */}
      <header className="p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center">
              <span className="text-xl">🍗</span>
            </div>
            <span className="font-display font-bold text-foreground">{config.name}</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">Skip</Button>
          </Link>
        </div>
      </header>

      {/* Progress */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex gap-1">
          {walkthroughSteps.map((_, index) => (
            <div 
              key={index}
              className={`h-1 flex-1 rounded-full transition-all ${
                index <= currentStep ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="max-w-md w-full text-center animate-fade-in" key={currentStep}>
          {/* Icon */}
          <div className="w-32 h-32 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-8 shadow-medium">
            <span className="text-6xl animate-bounce-soft">{step.icon}</span>
          </div>

          {/* Step Number */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Step {step.id} of {walkthroughSteps.length}
          </div>

          {/* Title */}
          <h1 className="font-display font-black text-2xl md:text-3xl text-foreground mb-4">
            {step.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8">
            {step.description}
          </p>

          {/* Special Content for specific steps */}
          {step.id === 4 && (
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-green-600/10 border border-green-600/20">
                <p className="font-bold text-green-600 mb-1">4-5 ⭐</p>
                <p className="text-sm text-muted-foreground">Great! Share publicly</p>
              </div>
              <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20">
                <p className="font-bold text-accent mb-1">1-3 ⭐</p>
                <p className="text-sm text-muted-foreground">We'll fix it first</p>
              </div>
            </div>
          )}

          {step.id === 7 && (
            <div className="p-6 rounded-3xl bg-card border border-border mb-8">
              <div className="flex items-center justify-center gap-4 text-4xl mb-4">
                <span>📝</span>
                <span>→</span>
                <span>⭐</span>
                <span>→</span>
                <span>🚀</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Collect → Publish → Grow
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-md mx-auto flex gap-3">
          <Button 
            variant="outline" 
            size="lg"
            onClick={prevStep}
            disabled={isFirst}
            className="flex-1"
          >
            <ChevronLeft className="w-5 h-5" /> Back
          </Button>
          
          {isLast ? (
            <Link to="/" className="flex-1">
              <Button variant="hero" size="lg" className="w-full">
                <Check className="w-5 h-5" /> Done
              </Button>
            </Link>
          ) : (
            <Button 
              variant="hero" 
              size="lg"
              onClick={nextStep}
              className="flex-1"
            >
              Next <ChevronRight className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Coming Soon Features */}
      {isLast && (
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-md mx-auto">
            <div className="p-4 rounded-2xl bg-muted/50 border border-border">
              <p className="font-semibold text-foreground mb-2 text-center">Coming Soon 🚀</p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <span className="px-2 py-1 rounded-lg bg-card border border-border">Online Ordering</span>
                <span className="px-2 py-1 rounded-lg bg-card border border-border">Loyalty Program</span>
                <span className="px-2 py-1 rounded-lg bg-card border border-border">Event Booking</span>
                <span className="px-2 py-1 rounded-lg bg-card border border-border">Review Analytics</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Walkthrough;
