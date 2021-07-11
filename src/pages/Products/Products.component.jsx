import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection.component";
import Pricing from "../../components/Pricing/Pricing.component";
import { homeObjTwo } from "./Data";

function Products() {
  return (
    <div>
      <Pricing />
      <HeroSection {...homeObjTwo} />
    </div>
  );
}

export default Products;
