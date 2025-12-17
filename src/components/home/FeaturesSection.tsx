import { Truck, Clock, Star, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            icon: Truck,
            title: 'Fast Delivery',
            description: 'Hot & fresh food delivered to your car in minutes',
            bgColor: 'bg-primary/10',
            iconColor: 'text-primary',
        },
        {
            icon: Sparkles,
            title: 'Fresh Food',
            description: 'Made to order with quality ingredients',
            bgColor: 'bg-accent/10',
            iconColor: 'text-accent',
        },
        {
            icon: Clock,
            title: 'Quick Service',
            description: 'Drive-in convenience, no waiting in lines',
            bgColor: 'bg-brand-orange/10',
            iconColor: 'text-brand-orange',
        },
        {
            icon: Star,
            title: 'Top Rated',
            description: '4.9 stars from 500+ happy customers',
            bgColor: 'bg-primary/10',
            iconColor: 'text-primary',
        },
    ];

    return (
        <section className="py-12 bg-background">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 hover:shadow-md transition-shadow"
                        >
                            <div className={`w-16 h-16 rounded-full ${feature.bgColor} flex items-center justify-center mb-4`}>
                                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                            </div>
                            <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
