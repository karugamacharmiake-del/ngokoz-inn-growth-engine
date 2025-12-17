import Layout from '@/components/layout/Layout';
import { Rocket, ShoppingCart, Heart, TrendingUp, Sparkles, Users, Mail, ChartBar, Zap, Target, MessageSquare, CheckCircle } from 'lucide-react';

const Roadmap = () => {
    const liveFeatures = [
        {
            title: 'Smart Review System',
            description: 'Capture 4-5 star reviews for Google, route 1-3 stars privately to management',
            icon: Heart,
            color: 'text-green-600',
            bgColor: 'bg-green-100',
            benefits: ['Boost online reputation', 'Protect brand image', 'Actionable feedback'],
        },
        {
            title: 'Brand Website',
            description: 'Professional, mobile-optimized site with TikTok integration',
            icon: Sparkles,
            color: 'text-green-600',
            bgColor: 'bg-green-100',
            benefits: ['Foodie-style design', 'Social proof display', 'Drive-in focused'],
        },
    ];

    const comingSoon = [
        {
            title: 'Online Ordering & Delivery',
            description: 'Full e-commerce platform with payment gateway integration',
            icon: ShoppingCart,
            color: 'text-primary',
            bgColor: 'bg-primary/10',
            timeline: 'Q1 2025',
            features: ['Mobile ordering', 'Real-time tracking', 'Multiple payment options'],
        },
        {
            title: 'Customer Loyalty Program',
            description: 'Reward repeat customers with points, discounts, and exclusive offers',
            icon: Users,
            color: 'text-primary',
            bgColor: 'bg-primary/10',
            timeline: 'Q1 2025',
            features: ['Point-based rewards', 'Birthday specials', 'VIP tiers'],
        },
        {
            title: 'SMS & Email Marketing',
            description: 'Automated campaigns to re-engage customers and drive repeat business',
            icon: Mail,
            color: 'text-primary',
            bgColor: 'bg-primary/10',
            timeline: 'Q2 2025',
            features: ['Promotional campaigns', 'Abandoned cart recovery', 'Event announcements'],
        },
    ];

    const planned = [
        {
            title: 'Business Analytics Dashboard',
            description: 'Comprehensive insights into sales, customer behavior, and growth trends',
            icon: TrendingUp,
            features: ['Real-time sales tracking', 'Customer demographics', 'Popular items analysis'],
        },
        {
            title: 'Social Media Automation',
            description: 'Schedule and auto-post content across TikTok, Instagram, and Facebook',
            icon: MessageSquare,
            features: ['Content calendar', 'Auto-posting', 'Engagement tracking'],
        },
        {
            title: 'Performance Optimization',
            description: 'SEO, speed optimization, and conversion rate improvements',
            icon: Zap,
            features: ['Google ranking', 'Page speed boost', 'A/B testing'],
        },
    ];

    return (
        <Layout>
            <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
                <div className="container">
                    {/* Hero */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="font-display font-black mb-4">
                            Your Complete <span className="text-gradient">Growth Engine</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                            Transform your restaurant into a customer magnet with our comprehensive digital ecosystem.
                            From reviews to online ordering, we build the tools that drive sustainable growth.
                        </p>
                        <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
                            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
                                ✅ 2 Features Live
                            </span>
                            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                                🚀 3 Features Coming Soon
                            </span>
                            <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground font-semibold">
                                📅 3 Features Planned
                            </span>
                        </div>
                    </div>

                    {/* What's Live Now */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                            <h2 className="font-display font-bold text-2xl md:text-3xl">What's Live Right Now</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {liveFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="relative bg-card border-2 border-green-600 rounded-3xl p-6 md:p-8"
                                >
                                    <div className="absolute -top-4 right-6 px-4 py-1 rounded-full bg-green-600 text-white text-sm font-bold">
                                        ✅ LIVE
                                    </div>
                                    <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                                        <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                    </div>
                                    <h3 className="font-display font-bold text-xl mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                                    <div className="space-y-2">
                                        <p className="text-sm font-semibold text-foreground">Benefits:</p>
                                        {feature.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <span className="text-green-600 mt-1">•</span>
                                                <span className="text-sm text-muted-foreground">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Coming Soon */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Rocket className="w-8 h-8 text-primary" />
                            <h2 className="font-display font-bold text-2xl md:text-3xl">Coming Soon</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {comingSoon.map((feature, index) => (
                                <div
                                    key={index}
                                    className="relative bg-card border-2 border-primary rounded-3xl p-6"
                                >
                                    <div className="absolute -top-4 right-6 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                                        🚀 {feature.timeline}
                                    </div>
                                    <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                                        <feature.icon className={`w-7 h-7 ${feature.color}`} />
                                    </div>
                                    <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                                    <div className="space-y-2">
                                        <p className="text-xs font-semibold text-foreground">Features:</p>
                                        {feature.features.map((feat, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <span className="text-primary text-xs mt-0.5">▸</span>
                                                <span className="text-xs text-muted-foreground">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Planned Features */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <Target className="w-8 h-8 text-muted-foreground" />
                            <h2 className="font-display font-bold text-2xl md:text-3xl">On the Horizon</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {planned.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-muted/50 border border-border rounded-2xl p-6"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-3">
                                        <feature.icon className="w-6 h-6 text-muted-foreground" />
                                    </div>
                                    <h3 className="font-display font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                                    <div className="space-y-1">
                                        {feature.features.map((feat, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <span className="text-muted-foreground text-xs mt-0.5">•</span>
                                                <span className="text-xs text-muted-foreground">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Value Proposition */}
                    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                                Not Just a Website — A Growth Partnership
                            </h2>
                            <p className="text-muted-foreground text-lg mb-6">
                                We don't just build websites. We create complete digital ecosystems designed to:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Turn customers into brand advocates</p>
                                        <p className="text-sm text-muted-foreground">Through smart review management</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Drive sustainable revenue growth</p>
                                        <p className="text-sm text-muted-foreground">With online ordering & loyalty</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Build your online presence</p>
                                        <p className="text-sm text-muted-foreground">SEO, social media & marketing</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Data-driven decision making</p>
                                        <p className="text-sm text-muted-foreground">Analytics & performance tracking</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-glow transition-shadow"
                                >
                                    Let's Discuss Your Growth
                                </a>
                                <a
                                    href="/review/submit"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-card border-2 border-border rounded-full font-semibold hover:shadow-md transition-shadow"
                                >
                                    See Demo (Leave Review)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Roadmap;
