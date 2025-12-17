import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import TikTokSection from '@/components/home/TikTokSection';
import PromotionalBanner from '@/components/home/PromotionalBanner';
import ReviewsPreview from '@/components/home/ReviewsPreview';
import LocationSection from '@/components/home/LocationSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <WhyUsSection />
      <TikTokSection />
      <PromotionalBanner />
      <ReviewsPreview />
      <LocationSection />
    </Layout>
  );
};

export default Index;
