
import {
  FaqSection,
  FeaturesSection,
  Footer,
  Header,
  Hero,
  LastSection,
  PriceSection,
  UrlSection,
} from "../components";
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturesSection />
      <PriceSection />
      <UrlSection />
      <FaqSection />
      <LastSection />
      <Footer />
    </div>
  );
}

export default Home;
