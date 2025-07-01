
import HeroSection from "../components/HomePageSection/HeroSection";
import HowItWorkSection from "../components/HomePageSection/HowItWorkSection";
import TestimonialSection from "../components/HomePageSection/TestimonialSection";
import FooterSection from "../components/HomePageSection/FooterSection";
import WhyUseSection from "../components/HomePageSection/WhyUseSection";

const HomePage = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">

        {/* Hero Section */}
        <HeroSection />

        {/* How It Works Section  */}
        <HowItWorkSection />

        {/* Why Use Section */}
        <WhyUseSection />

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* Footer */}
        <FooterSection />
    </div>
);

export default HomePage;