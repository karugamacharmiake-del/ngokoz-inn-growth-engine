import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import ReviewsPreview from '@/components/home/ReviewsPreview';
import LocationSection from '@/components/home/LocationSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyUsSection />
      <SocialProofSection />
      <ReviewsPreview />
      <LocationSection />
    </Layout>
  );
};

export default Index;
