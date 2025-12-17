import { Tag, Percent, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PromotionalBanner = () => {
    const promotions = [
        {
            id: 1,
            title: "25% OFF",
            subtitle: "Family Feast",
            description: "Perfect for weekends! Feeds 4-5 people",
            icon: Percent,
            bgGradient: "from-accent to-accent/80",
            txtColor: "text-white",
        },
        {
            id: 2,
            title: "Buy 2 Get 1",
            subtitle: "Shawarmas",
            description: "Mix and match any flavors",
            icon: Gift,
            bgGradient: "from-primary to-primary/80",
            txtColor: "text-primary-foreground",
        },
        {
            id: 3,
            title: "KES 500",
            subtitle: "Student Special",
            description: "Burger + Fries + Drink combo",
            icon: Tag,
            bgGradient: "from-purple-600 to-pink-600",
            txtColor: "text-white",
        },
    ];

    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h2 className="font-display font-black text-foreground mb-3">
                        Hot <span className="text-gradient">Deals!</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Limited time offers - grab them while they last! 🔥
                    </p>
                </div>

                {/* Promotional Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {promotions.map((promo) => (
                        <div
                            key={promo.id}
                            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${promo.bgGradient} p-8 shadow-strong hover:shadow-glow transition-shadow`}
                        >
                            {/* Icon */}
                            <div className="absolute -right-8 -top-8 opacity-10">
                                <promo.icon className="w-40 h-40" />
                            </div>

                            <div className="relative z-10">
                                {/* Tag Icon */}
                                <Tag className={`w-8 h-8 ${promo.txtColor} mb-4`} />

                                {/* Title */}
                                <h3 className={`font-display font-black text-4xl mb-2 ${promo.txtColor}`}>
                                    {promo.title}
                                </h3>

                                {/* Subtitle */}
                                <p className={`text-xl font-bold mb-2 ${promo.txtColor}`}>
                                    {promo.subtitle}
                                </p>

                                {/* Description */}
                                <p className={`text-sm mb-6 ${promo.txtColor} opacity-90`}>
                                    {promo.description}
                                </p>

                                {/* CTA */}
                                <Link to="/menu">
                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        className="font-bold"
                                    >
                                        Order Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Deals CTA */}
                <div className="text-center mt-8">
                    <p className="text-muted-foreground text-sm">
                        Follow us on TikTok <span className="text-primary font-bold">@ngokoz.inn</span> for exclusive flash deals!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PromotionalBanner;
