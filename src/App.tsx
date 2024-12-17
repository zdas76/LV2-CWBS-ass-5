import { FeaturedService } from "./components/page/homePage/FeaturedService";
import HeroSection from "./components/page/homePage/HeroSection";
import ReviewSection from "./components/page/homePage/ReviewSection";

function App() {
  return (
    <section className="min-h-screen container mx-auto">
      <HeroSection />
      <FeaturedService/>
      <ReviewSection />
    </section>
  );
}

export default App;
