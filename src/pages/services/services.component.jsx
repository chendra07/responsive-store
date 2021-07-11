import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection.component";
import Pricing from "../../components/Pricing/Pricing.component";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function Services() {
  return (
    <div>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </div>
  );
}

export default Services;
