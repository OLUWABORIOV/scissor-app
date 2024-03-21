import * as React from "react";



import {
  Analysis,
  FeaturesPg,
  FaqSection,
  PriceSection,
  Footer,
  HeaderPg,
  HeroPg,
  LastSection,
  UrlSectionPg,
} from "../components";

interface IOnBoardingProps {}
const OnBoarding: React.FunctionComponent<IOnBoardingProps> = () => {
 

  return (
    <div>
      <HeaderPg />
      <HeroPg />
      <FeaturesPg />
      <PriceSection />
      <Analysis />
      <UrlSectionPg />
      <FaqSection />
      <LastSection />
      <Footer />
    </div>
  );
};

export default OnBoarding;
