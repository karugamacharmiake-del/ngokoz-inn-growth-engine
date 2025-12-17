import { useBrand } from '@/context/BrandContext';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const SocialProofSection = () => {
  const { config } = useBrand();

  const mockVideos = [
    { id: 1, views: '125K', likes: '12K', caption: 'The wings are CRAZY 🔥' },
    { id: 2, views: '89K', likes: '8.5K', caption: 'Family day at Ngokoz!' },
    { id: 3, views: '203K', likes: '24K', caption: 'This shawarma though 😍' },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-foreground/10 mb-4">
            <TikTokIcon />
            <span className="font-semibold text-secondary-foreground">We're Viral!</span>
          </div>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mb-4">
            50K+ TikTok <span className="text-primary">Followers</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Join the movement! See why Rongai can't stop talking about us.
          </p>
        </div>

        {/* Mock TikTok Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:justify-center">
          {mockVideos.map((video, index) => (
            <div 
              key={video.id}
              className="flex-shrink-0 w-48 md:w-56 snap-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-strong">
                {/* Video Placeholder */}
                <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[20px] border-l-foreground border-y-[12px] border-y-transparent ml-1" />
                    </div>
                  </div>
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-semibold line-clamp-2">{video.caption}</p>
                    <div className="flex items-center gap-3 mt-2 text-white/80 text-xs">
                      <span>👁 {video.views}</span>
                      <span>❤️ {video.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-8">
          <a 
            href={`https://tiktok.com/${config.tiktok}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background font-bold hover:scale-105 transition-transform"
          >
            <TikTokIcon />
            Follow {config.tiktok}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
