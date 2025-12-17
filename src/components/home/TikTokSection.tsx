import { tiktokVideos } from '@/data/mockData';
import { useEffect } from 'react';
import { Eye, Heart } from 'lucide-react';

const TikTokSection = () => {
    useEffect(() => {
        // Load TikTok embed script immediately when component mounts
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up script on unmount
            const scripts = document.querySelectorAll('script[src="https://www.tiktok.com/embed.js"]');
            scripts.forEach(s => s.remove());
        };
    }, []);

    // Engagement data for videos
    const videoEngagement = [
        { caption: "The wings are CRAZY 🔥", views: "125K", likes: "12K" },
        { caption: "Family day at Ngokoz!", views: "89K", likes: "8.5K" },
        { caption: "Shawarma loaded to perfection 🌯", views: "156K", likes: "15K" },
        { caption: "Drive-in vibes 🚗", views: "98K", likes: "9.2K" },
        { caption: "Our secret sauce revealed!", views: "203K", likes: "18K" },
        { caption: "Customer favorites 🍗", views: "112K", likes: "11K" },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-display font-black text-foreground mb-3">
                        We're <span className="text-gradient">Viral!</span>
                    </h2>
                    <p className="text-2xl font-bold text-foreground mb-2">
                        50K+ TikTok Followers
                    </p>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Join the movement! See why Rongai can't stop talking about us.
                    </p>
                </div>

                {/* TikTok Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {tiktokVideos.map((videoId, index) => (
                        <div key={videoId} className="group">
                            {/* Engagement Preview */}
                            <div className="mb-3 p-4 rounded-xl bg-card border border-border group-hover:shadow-md transition-shadow">
                                <p className="font-semibold text-foreground mb-2">
                                    {videoEngagement[index].caption}
                                </p>
                                <div className="flex gap-4 text-sm">
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <Eye className="w-4 h-4" />
                                        <span className="font-medium">{videoEngagement[index].views}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <Heart className="w-4 h-4" />
                                        <span className="font-medium">{videoEngagement[index].likes}</span>
                                    </div>
                                </div>
                            </div>

                            {/* TikTok Embed - loads immediately */}
                            <div className="rounded-2xl overflow-hidden shadow-medium">
                                <blockquote
                                    className="tiktok-embed"
                                    cite={`https://www.tiktok.com/@ngokoz.inn/video/${videoId}`}
                                    data-video-id={videoId}
                                    style={{ maxWidth: '605px', minWidth: '325px' }}
                                >
                                    <section>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="@ngokoz.inn"
                                            href={`https://www.tiktok.com/@ngokoz.inn/video/${videoId}`}
                                        >
                                            @ngokoz.inn
                                        </a>
                                    </section>
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Follow CTA */}
                <div className="text-center">
                    <a
                        href="https://www.tiktok.com/@ngokoz.inn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-glow transition-shadow"
                    >
                        <span className="text-2xl">📱</span>
                        Follow @ngokoz.inn on TikTok
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TikTokSection;
