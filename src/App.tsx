import { FeaturedService } from "./components/page/homePage/FeaturedService";
import HeroSection from "./components/page/homePage/HeroSection";

function App() {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <FeaturedService/>
    </section>
  );
}

export default App;
