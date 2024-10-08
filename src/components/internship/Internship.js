import React from "react";
import Heads from "./Heads";
import BenefitCards from './BenefitCards';
import WhyIntern from './WhyIntern';
import WhatYouWillGet from "./WhatGet";
import Recommendation from "./Recommendation";
import Register from "./Register";
import Marquee from "./Marquee";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Domains from "./Domains";


function Internship() {
  return (
    <div>   
        <Navbar/>
        <Heads />
        <BenefitCards/>
        <Marquee/>
        <Domains/>
        <WhyIntern/>
        <WhatYouWillGet/>
        <Recommendation/>
        <Register/>
        <Footer/>
    </div>
  )
}

export default Internship;
