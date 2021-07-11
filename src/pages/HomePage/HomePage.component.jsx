import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection.component";
import Pricing from "../../components/Pricing/Pricing.component";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function HomePage() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </div>
  );
}

export default HomePage;
