// import React from 'react'

// applying the aggregated components so instead of having a  long list of imports, i can just have everything in one line
// i noticed that the imports arranged alphabetically and they work perfectly too.
import {
  // Button,
  FaqSection,
  FeaturesSection,
  Footer,
  Header,
  Hero,
  LastSection,
  PriceSection,
  // UrlSection,
} from "../components";
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Button label="" /> */}
      <FeaturesSection />
      <PriceSection />
      {/* <UrlSection /> */}
      <FaqSection />
      <LastSection />
      <Footer />
    </div>
  );
}

export default Home;
