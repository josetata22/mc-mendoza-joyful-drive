import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { Gallery } from "@/components/Gallery"
import { Testimonials } from "@/components/Testimonials"
import { Blog } from "@/components/Blog"
import { Location } from "@/components/Location"
import { Footer } from "@/components/Footer"
import { FloatingContact } from "@/components/FloatingContact"

const Index = () => {
  const logo = "/lovable-uploads/d91d7a93-553e-441b-8c48-b97a2a2d052f.png"

  return (
    <div className="min-h-screen bg-background">
      <Navigation logo={logo} />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Blog />
      <Location />
      <Footer logo={logo} />
      <FloatingContact />
    </div>
  );
};

export default Index;
